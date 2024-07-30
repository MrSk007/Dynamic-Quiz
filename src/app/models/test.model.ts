export interface Test {
  id: number;
  status: 'Pass' | 'Fail';
  marks: number;
  totalMarks: number;
  completed: Date;
}
