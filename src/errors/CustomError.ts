interface CustomErrorProps {
  message: string;
  statusCode: number;
  name: string;
}

class CustomError extends Error {
  statusCode: number; // 추가적인 에러 라벨

  constructor({ message, statusCode, name }: CustomErrorProps) {
    super(message); // 기본 Error 메시지 설정
    this.name = name; // 기본적으로 name을 설정
    this.statusCode = statusCode; // response.statusCode
  }
}

export default CustomError;
