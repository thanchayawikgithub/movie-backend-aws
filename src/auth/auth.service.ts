import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CustomersService } from 'src/customers/customers.service';
import { Customer } from 'src/customers/entities/customer.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private customerService: CustomersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const customer = await this.customerService.findOneByEmail(email);
    if (!customer) {
      throw new NotFoundException('customer not found');
    }
    const isMatch = await bcrypt.compare(pass, customer.cusPassword);
    if (!isMatch) {
      throw new UnauthorizedException('passwords do not match');
    }

    const payload = { sub: customer };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
