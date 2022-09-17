export type propsType = {
  memberId?: string;
  password?: string;
  passwordChk?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  extraAddress?: string;
  checked?: string;
  birth?:{year: string, month: string, day: string};
  isActive?: boolean;
  isComplete?: boolean,
  memberIdErr?:boolean;
  passwordErr?:number;
  passwordChkErr?: boolean;
  nameErr?: boolean;
  emailErr?: boolean;
  phoneErr?: boolean;
  memberIdErrMessage?: string;
  passwordErrMessage?: string;
  passwordChkErrMessage?: string;
  nameErrMessage?:string;
  emailErrMessage?:string;
  phoneErrMessage?:string;
  onChangeMemberId?:any;
  onChangePassword?:any;
  onChangePasswordChk?:any;
  onChangeName?:any;
  onChangeEmail?:any;
  onChangePhone?: any;
  handleClick?: any;
  onChangeExtraAddress?:any;
  onChangeGender?:any;
  onChangeBirthYear?: any;
  onChangeBirthMonth?: any;
  onChangeBirthDay?: any;
}