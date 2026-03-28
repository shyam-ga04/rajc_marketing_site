import axios from "axios"

const apiEndPoint = import.meta.env.VITE_API_ENDPOINT

export const getCompanyDetails = async (id: number) => {
  try {
    const response = await axios.get(`${apiEndPoint}/admin/company/${id}`)
    return response
  } catch (error) {}
}

export const createCompanyDetails = async (payload: any) => {
  try {
    const response = await axios.post(
      `${apiEndPoint}/admin/company/create`,
      payload,
      {},
    )
    return response
  } catch (error) {}
}
export const updateCompanyDetails = async (payload: any, id: number) => {
  try {
    const response = await axios.patch(
      `${apiEndPoint}/admin/company/${id}`,
      payload,
      {},
    )
    return response
  } catch (error) {}
}
