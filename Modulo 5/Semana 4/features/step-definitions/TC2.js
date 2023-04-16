const {Given, Then, When, Before, After} = require('@cucumber/cucumber')
const webdriver = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

//SETUP CHROME DRIVER
var chrome = require('chromedriver');
//var options   = new chrome.Options().headless();

// SETUP FIREFOX DRIVER 
 const firefox = require('geckodriver');

 let driver

Before(function () {

  // let browser = process.env.BROWSER;
  // if (browser == 'firefox') { browser = 'firefox'; }
  // if (browser == 'chrome') { browser = 'chrome'; }

  //   driver =  new Builder()
  //   .forBrowser(browser)
  //   //.withCapabilities(webdriver.Capabilities.chrome())
  //   //.setChromeOptions(options)
  //   .build();    
  })
  // After( function() {
  //   driver.quit();
  // })


Given('usuario acessa menu de cadastro novamente, {string}', {timeout: 30 * 1000}, function(browser) {  
    
  if (browser == 'firefox') { browser = 'firefox'; }
  if (browser == 'chrome') { browser = 'chrome'; }

    driver =  new Builder()
    .forBrowser(browser)
    //.withCapabilities(webdriver.Capabilities.chrome())
    //.setChromeOptions(options)
    .build();    

    driver.get("https://demo.guru99.com/Agile_Project/Agi_V1/")
    driver.manage().window().setRect({ width: 1364, height: 718 })
       
          });

  When('preenche campos com exemplos {string},{string},{string} e confirmacao', {timeout: 30 * 1000}, function (string, string2, string3) {
    driver.findElement(By.name("uid")).click()
    driver.findElement(By.name("uid")).sendKeys("1303")
    driver.findElement(By.name("password")).click()
    driver.findElement(By.name("password")).sendKeys("Guru99")
        
          });

Then('o sistema exibe uma mensagem de sucesso para cada exemplo', {timeout: 30 * 1000}, function () {

    driver.findElement(By.name("btnLogin")).click()
    assert( driver.findElement(By.css(".heading3")).getText() != "Welcome To Customer")
    driver.close();
    driver.quit();
    
    
          });
