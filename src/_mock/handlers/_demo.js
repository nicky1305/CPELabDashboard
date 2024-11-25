import { http, HttpResponse } from "msw";

import { DemoApi } from "@/api/services/demoService";

const demoApiUrl = {
	tokenExpired: DemoApi.TOKEN_EXPIRED,
}

const mockTokenExpired = http.post(demoApiUrl.tokenExpired, () => {
	return new HttpResponse(null, { status: 401 });
});

export default [mockTokenExpired, demoApiUrl];
