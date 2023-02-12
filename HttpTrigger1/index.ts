import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const splitValue = req.body.split("&").map(v => v.split("="))
    const result = splitValue.reduce((acc: Object[], val: string[], index) => {
        const key = val[0]
        const value = val[1]
        acc[index] = { [key]: value }
        return acc
    }, [])
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: result
    };
};

export default httpTrigger;