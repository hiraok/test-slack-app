import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const splitValue = req.body.split("&").map(v => v.split("="));
    let result = {};
    splitValue.forEach((element) => {
        result[element[0]] = element[1];
    })
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: result
    };
};

export default httpTrigger;