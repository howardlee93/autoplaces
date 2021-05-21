// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}


export type Result = {
  lessonId: number
  title: number 
  keywords: Array<string>
  tags: Array<any>
  content: string
  teacherNames: Array<string>
  teacherUsernames: Array<string>
  createdDate: string
  createdBy: string
  modifiedDate: string
  modifiedBy: string 

}