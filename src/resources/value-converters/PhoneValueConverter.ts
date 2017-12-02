
export class PhoneValueConverter {
  toView(value: string) {
    const pattern = /(\d{2})(\d+)$/;
    const match = pattern.exec(value);

    if (!match) {
      return "???";
    }

    const code = match[1];
    const rest = match[2];

    return `(${code}) ${rest}`;
  }
}
