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
      `${apiEndPoint}/admin/company/update/${id}`,
      payload,
      {},
    )
    return response
  } catch (error) {}
}

export const uploadCompanyLogo = async (file: File, id: number) => {
  const formData = new FormData()
  formData.append("logo", file)
  const response = await axios.post(
    `${apiEndPoint}/admin/company/upload-logo/${id}`,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } },
  )
  return response
}
