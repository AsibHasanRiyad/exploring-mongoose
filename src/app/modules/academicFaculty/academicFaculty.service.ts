import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFacultyModel } from './academicFaculty.model';

const createAcademicFaculty = async (payload: TAcademicFaculty) => {
  const result = await AcademicFacultyModel.create(payload);

  return result;
};

const getAllAcademicFaculties = async () => {
  const result = await AcademicFacultyModel.find();
  return result;
};

const getSingleAcademicFaculty = async (id: any) => {
  const result = await AcademicFacultyModel.findById(id);
  return result;
};

const updateSingleAcademicFaculty = async (
  payload: Partial<TAcademicFaculty>,
  id: any,
) => {
  const result = await AcademicFacultyModel.findOneAndUpdate(
    { _id: id },
    payload,
    { new: true },
  );
  return result;
};

export const AcademicFacultyServices = {
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateSingleAcademicFaculty,
};
