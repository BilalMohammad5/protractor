import { browser } from "protractor";

describe('Chain locat ors demo', () => {


    it('Open Angular js website', async () => {

       browser.get("https://github.com/");
       console.log(browser.getTitle());
        })

    })