// Products shown in the mockups. Prices are RRP incl GST from Greg's lists (Curasept 22 Nov sheet, Ovoss and
// iDontix 22 Oct list). Practice-only lines show a sign-in prompt instead of a price.
window.PRODUCTS = {
  "ovoss-toothpaste": {brand:"Ovoss", name:"Toothpaste", desc:"Implant Care, with active oxygen", size:"75 ml", price:12.95},
  "ovoss-mouthwash": {brand:"Ovoss", name:"Mouthwash", desc:"Implant Care, with active oxygen", size:"500 ml", price:14.95},
  "cs-ads205": {brand:"Curasept", name:"ADS 205 Rinse", desc:"Chlorhexidine 0.05% + fluoride", size:"200 ml", price:15.99},
  "cs-ads212": {brand:"Curasept", name:"ADS 212 Rinse", desc:"Chlorhexidine 0.12%", size:"200 ml", price:15.99},
  "cs-ads220": {brand:"Curasept", name:"ADS 220 Rinse", desc:"Chlorhexidine 0.20%", size:"200 ml", price:15.99},
  "cs-ads350": {brand:"Curasept", name:"ADS 350 Gel", desc:"Gingival gel, chlorhexidine 0.5%", size:"30 ml", price:15.67},
  "cs-ads705": {brand:"Curasept", name:"ADS 705 Toothpaste", desc:"Gel toothpaste, chlorhexidine 0.05%", size:"", price:12.49},
  "cs-ads712": {brand:"Curasept", name:"ADS 712 Toothpaste", desc:"Gel toothpaste, chlorhexidine 0.12%", size:"", price:12.49},
  "cs-ads5020": {brand:"Curasept", name:"ADS 5020 Dispenser", desc:"Chlorhexidine 0.20% rinse", size:"5 L", price:234.96},
  "cs-ads920": {brand:"Curasept", name:"ADS 920 Rinse", desc:"Chlorhexidine 0.20%", size:"900 ml", price:null, practice:true},
  "cs-gel5ml": {brand:"Curasept", name:"ADS 350 Gel Tubes", desc:"Dispenser box of 5 ml tubes", size:"", price:184.80},
  "idx-xfloss": {brand:"iDontix", name:"X-Floss", desc:"Expanding threader floss", size:"30 strands", price:12.50},
  "idx-xfloss-lite": {brand:"iDontix", name:"X-Floss Lite", desc:"Expanding threader floss", size:"30 strands", price:12.50},
  "idx-xribbon": {brand:"iDontix", name:"X-Ribbon", desc:"Dental gauze floss", size:"12 m", price:12.50},
  "idx-sample-xfloss": {brand:"iDontix", name:"X-Floss Samples", desc:"Patient sample cards", size:"", price:null, practice:true, free:true},
  "idx-sample-xfloss-lite": {brand:"iDontix", name:"X-Floss Lite Samples", desc:"Patient sample cards", size:"", price:null, practice:true, free:true}
};
window.fmtPrice = p => p.price != null ? "$" + p.price.toFixed(2) : (p.free ? "Free for practices" : "Practice price on sign-in");
