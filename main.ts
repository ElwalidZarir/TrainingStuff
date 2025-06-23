interface User<T> {
  name: T;
  age?: number;
  email: string;
}

interface User<T>{
    id?:number;
}

interface Student<T> extends User<T>{
    grade: number;
}

const student: Student<string> ={
    name:"walid",
    email:"lele@gmail.com",
    grade:10
}
