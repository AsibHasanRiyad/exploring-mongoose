import { academicSemesterNameCodeMapper } from './academicSemester.const';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterModel } from './academicSemester.model';

const createAcademicSemester = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }
  const result = await AcademicSemesterModel.create(payload);

  return result;
};

const getAllAcademicSemester = async () => {
  const result = await AcademicSemesterModel.find();
  return result;
};

const getSingleAcademicSemester = async (id: any) => {
  const result = await AcademicSemesterModel.findById(id);
  return result;
};

const updateSingleSemester = async (payload: TAcademicSemester) => {
  const result = await AcademicSemesterModel.updateOne(payload);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  updateSingleSemester,
};
