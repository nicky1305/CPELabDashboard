import { http, HttpResponse } from "msw";

import { ORG_LIST } from "@/_mock/assets";
import { OrgApi } from "@/api/services/orgService";

const orgApiUrl = {
	org: OrgApi.Org,
}

const orgList = http.get(orgApiUrl.org, () => {
	return HttpResponse.json({
		status: 0,
		message: "",
		data: ORG_LIST,
	});
});

export default [orgList, orgApiUrl];
