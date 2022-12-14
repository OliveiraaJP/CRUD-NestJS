import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserRepository } from '../user.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueEmailValidator implements ValidatorConstraintInterface {
  constructor(private readonly userRepo: UserRepository) {}

  async validate(value: string): Promise<boolean> {
    const user = await this.userRepo.get(value);
    if (user) return false;
    return true;
  }
}

export const IsUniqueEmail = (options: ValidationOptions) => {
  return (object: any, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: options,
      constraints: [],
      validator: UniqueEmailValidator,
    });
  };
};
