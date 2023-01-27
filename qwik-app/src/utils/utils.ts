/*
status
string
If the request was successful or not. Options: ok, error. In the case of error a code and message property will be populated.

totalResults
int
The total number of results available for your request. Only a limited number are shown at a time though, so use the page parameter in your requests to page through them.

articles
array[article]
The results of the request.

source
object
The identifier id and a display name name for the source this article came from.

author
string
The author of the article

title
string
The headline or title of the article.

description
string
A description or snippet from the article.

url
string
The direct URL to the article.

urlToImage
string
The URL to a relevant image for the article.

publishedAt
string
The date and time that the article was published, in UTC (+000)

content
string
The unformatted content of the article, where available. This is truncated to 200 chars.
*/
export type allArticlesSchema = {
    
        status?: string,
        code?:string,
        totalResults?: number,
        articles?: object[],
        source?: object,
        author?: string,
        title?: string,
        description?: string,
        url?: string,
        urlToImage?: string,
        publishedAt?: string,
        content?: string
    
}
export type allSourcesSchema = {
    
        status?: string,
        code?:string,
        totalResults?: number,
        sources?: object[],
        source?: object,
        author?: string,
        title?: string,
        description?: string,
        url?: string,
        urlToImage?: string,
        publishedAt?: string,
        content?: string
    
}

//schema for culture state object
export type stateSchema = {
        values?: string[],
        val?: string | URL,
        value?: string | URL | number
    }
    