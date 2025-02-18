export const apiResponse = (res: any, payload: any) => {
    res.status(payload.status).json(payload)
}

export const successResponse = (data: any,message?:string) => {

    const successPayload = {
        success:true,
        status: 200,
        message: message || '' ,
        data
    }
    return successPayload
}

export const errorResponse = (errorMessage: any, code = 400) => {
    const errorPayload = {
        success:false,
        status: code,
        message: errorMessage || 'Something went wrong',
        data: null
    }
    return errorPayload
}