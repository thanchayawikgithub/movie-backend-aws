import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CustomersService } from 'src/customers/customers.service';

@Injectable()
export class AuthService {
  constructor(
    private customerService: CustomersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    console.log(email, pass);
    const customer = await this.customerService.findOneByEmail(email);
    if (!customer) {
      throw new NotFoundException('customer not found');
    }
    if (customer?.cusPassword !== pass) {
      throw new UnauthorizedException('passwords do not match');
    }
    const payload = { customer: customer };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
