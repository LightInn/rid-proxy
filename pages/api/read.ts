import type {NextApiRequest, NextApiResponse} from 'next'
// @ts-ignore
import {JSDOM} from "jsdom";
import {Readability} from "@mozilla/readability";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log("/read called");

    const url = req.query.url
    // const url = c.req.query('url')
    console.log(url);


    if (!url) {
        res.status(503).json({error: 'URL param is required'})
        return;
    }

    // @ts-ignore
    var html = await fetch(new URL(url)).then(response => response.text())


    var doc = new JSDOM(html, {
        url: url,
    });
    let reader = new Readability(doc.window.document);
    let article = reader.parse();


// return json
    res.status(200).json(article)
}