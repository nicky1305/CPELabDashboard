import apiClient from "../apiClient";

import type { Organization } from "@/type/entity";

export enum OrgApi {
	Org = "/api/org",
}

const getOrgList = () => apiClient.get<Organization[]>({ url: OrgApi.Org });

export default {
	getOrgList,
};
