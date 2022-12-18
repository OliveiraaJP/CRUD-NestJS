import { Injectable } from '@nestjs/common';

type Response = {
  email: string;
  name: string;
};

@Injectable()
export class UserUtils {
  async filterEmails(emails: Response[]) {
    emails.map((email) => {
      const hashedEmail = this.hashEmail(email.email);
      email.email = hashedEmail;
    });
    return emails;
  }

  private hashEmail(mail: string) {
    const index = mail.indexOf('@');
    const emailBefore = mail.slice(0, index);
    const email = mail.slice(index);
    let hashemail = mail[0];
    for (let i = 1; i < emailBefore.length; i++) {
      hashemail += '*';
    }
    return hashemail + email;
  }
}
