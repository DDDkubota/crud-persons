export interface ObjectEmploye{
    name: string;
    motherLastName:string;
    fatherLastName:string;
    age:string;
    birthDay:Date;
    maritalStatus: 'Married'| 'Single' ;
    phone:string;
    country:string[];
    language:string[];

}