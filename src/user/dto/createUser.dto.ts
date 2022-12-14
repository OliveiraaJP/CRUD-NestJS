import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { IsUniqueEmail } from '../validators/email-unique.validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio!' })
  name: string;

  @IsNotEmpty({ message: 'O email não pode ser vazio!' })
  @IsEmail(undefined, { message: 'Email informado inválido!' })
  @IsUniqueEmail({ message: 'Já existe um usuário com esse email!' })
  email: string;

  @MinLength(3, { message: 'A senha deve ter no mínimo 3 caracteres!' })
  password: string;
}
