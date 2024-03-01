import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const customer = new Customer();
    customer.cusFirstname = createCustomerDto.cusFirstname;
    customer.cusLastname = createCustomerDto.cusLastname;
    customer.cusEmail = createCustomerDto.cusEmail;
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createCustomerDto.cusPassword, salt);
    customer.cusPassword = hash;
    const saveCustomer = await this.customerRepository.save(customer);
    return saveCustomer;
  }

  findAll() {
    return this.customerRepository.find();
  }

  async findOne(id: number) {
    const customer = await this.customerRepository.findOne({
      where: { cusId: id },
      relations: { cards: true },
    });
    if (!customer) {
      throw new NotFoundException('customer not found');
    }
    return customer;
  }

  async findOneByEmail(email: string) {
    const customer = await this.customerRepository.findOne({
      where: { cusEmail: email },
    });
    console.log(customer);
    if (!customer) {
      throw new NotFoundException('customer not found');
    }
    return customer;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
