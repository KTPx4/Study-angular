import { BaseUrl } from "./api-command.constant";

export const ApiEndpoint = {
    Products: {
        GetAll: `${BaseUrl.API_PRODUCT}`,
        GetById: (id: string) => `${BaseUrl.API_PRODUCT}/${id}`,
    }
}