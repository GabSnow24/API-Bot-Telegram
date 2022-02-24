import axios from 'axios'
import {Method} from 'axios'
import puppeteer from "puppeteer";
require("dotenv-safe").config();
import { Telegraf } from "telegraf";
const bot = new Telegraf(process.env.BOT_TOKEN);

async function robo() {
  let status = true;
  console.log("Bem vindo ao Bot do Iphone 💰");
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });

  const qualquerUrl = `https://web.telegram.org/k/`;
  await page.goto(qualquerUrl);
  await page.addStyleTag({ content: "{scroll-behavior: auto !important;}" });
    console.log("Abrindo telegram");
      //clica no primeiro produto
      try {
        await page.waitForSelector("#column-left > div > div > div.sidebar-header > div.input-search > input");
        await page.click("#column-left > div > div > div.sidebar-header > div.input-search > input");
      } catch (error) {
        let data:any = {
          text:"Não foi possível clicar no primeiro modal"
        }
        console.log(data.text);
        // TODO - AUTOMATIZAR CHAMADAS NA API
        
        /*let url:string = "http://localhost:3001/status"
        const  response = await axios({
          method: 'POST',
          headers: {
            "Accept":"application/json"
          },
          url,
          data
        })
        */
      await browser.close();
      //return sendMessages(data.text)
      }
      //clica no botao de comprar na tela do produto
      try {
        await page.waitForSelector(
          'button[class="l-purchase-button o-button -xs-fill -xs-primary -xs-flat -xs-small -md-medium is-valid"]'
        );
        await page.click(
          'button[class="l-purchase-button o-button -xs-fill -xs-primary -xs-flat -xs-small -md-medium is-valid"]'
        );
      } catch (error) {
        let data:any = {
          text:"Não foi possível comprar, alguém já comprou"
        }
        console.log(data.text);
        let url:string = "http://localhost:3001/status"
        const  response = await axios({
          method: 'POST',
          headers: {
            "Accept":"application/json"
          },
          url,
          data
      })
        await browser.close();
        return sendMessages();
      }

      //botão entrar
      actions(
        'button[class="o-button -xs-flat -xs-primary -xs-small -md-medium -xs-fill l-option-button"]',
        "Não foi possível clicar no botão de entrar"
      );

      //input dos dados de login
      try {
        await page.type('input[name="user[email]"]', `${process.env.EMAIL}`, {
          delay: 20,
        });
        await page.type(
          'input[name="user[password]"]',
          `${process.env.SENHA}`,
          {
            delay: 20,
          }
        );
      } catch (error) {
        let data:any = {
          text:"Não foi digitar dados de login"
        }
        console.log(data.text);
        let url:string = "http://localhost:3001/status"
        const  response = await axios({
          method: 'POST',
          headers: {
            "Accept":"application/json"
          },
          url,
          data
      })
        await browser.close();
        return sendMessages(data.text);
      }

      //clicar para confirmar login
      actions(
        'button[class="o-button -xs-flat -xs-primary -xs-small -md-medium -xs-fill t-lowercase"]',
        "Não foi possível confirmar o login"
      );

      //confirmar endereço
      actions(
        'button[class="o-button -xs-primary -xs-medium -xs-flat -xs-fill l-profile-update__action"]',
        "Não foi possível confirmar o endereço"
      );

      console.log("--------ALARME IPHONE---------------");
      let data:any = {
        text:"ENCONTRAMOS O"
      }
      console.log(data.text);
      let url:string = "http://localhost:3001/status"
      const  response = await axios({
        method: 'POST',
        headers: {
          "Accept":"application/json"
        },
        url,
        data
    })
      await browser.close();
      return sendMessages(data.text);

  async function sendMessages(message?: any) {
    let msg = "ACHAMOS O IPHONE MAS ALGUÉM JÁ COMPROU";
    let id = [process.env.CHAT_ID, process.env.CHAT_ID2];
    if (message) {
      return (msg = message);
    }
    id.map((id) => bot.telegram.sendMessage(id, msg));
  }
  async function restart() {
    console.log("AINDA NAO BOTARAM O IPHONE");
    await browser.close();
    robo();
  }
  async function actions(selector: string, error: string) {
    try {
      await page.waitForSelector(selector);
      await page.click(selector);
    } catch (error) {
      console.log(error);
    }
  }
}

export default robo;