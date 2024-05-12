class Pendaftaran {
  constructor(
    Name,
    Username,
    Email,
    Password,
    Address,
    PhoneNumber,
    ProgramSelected
  ) {
    this.Name = Name;
    this.Username = Username;
    this.Email = Email;
    this.Password = Password;
    this.Address = Address;
    this.PhoneNumber = PhoneNumber;
    this.ProgramSelected = ProgramSelected;
  }

  get Password() {
    return this.Password;
  }

  set Password(newPassword) {
    if (newPassword.length >= 8 && newPassword.length <= 10) {
      console.log("Password Benar");
    } else {
      console.log("Password Harus Menggandung 8 karakter");
    }
  }

  set validatingEmail(Email) {
    if (Email.includes("@")) {
      this.Email = Email;
      console.log("Email Benar");
    } else {
      console.log("Email Salah: Email harus mengandung '@'");
    }
  }

  set PhoneNumber(phone) {
    this._phoneNumber = phone;
    this.temp_phone = phone.slice(0, phone.length - 5) + "*****";
    console.log("Phone Number:", this.temp_phone);
  }
}
const pendaftaran1 = new Pendaftaran(
  "chairil",
  "chairil1727",
  "chairil12@gmail.com",
  "asd1234r",
  "blokM",
  "081234567890",
  "JCWD"
);
pendaftaran1.validatingEmail = "chairil12@gmail.com";
console.log(pendaftaran1);
