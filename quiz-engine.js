export const questions = [
 { id:'feeling', chapter:0, title:'What would a good hair day give you?', subtitle:'Start with the feeling. We’ll take care of the routine.', options:[
  {id:'confidence',label:'A little more confidence',detail:'Feel good walking into any room',icon:'spark'},
  {id:'ease',label:'One less thing to think about',detail:'Get ready. Get on with my day.',icon:'sun'},
  {id:'expression',label:'More room to be myself',detail:'Hair that feels like my style',icon:'flower'},
  {id:'attention',label:'That “your hair looks great” feeling',detail:'Enjoy a compliment. Own the moment.',icon:'heart'}]},
 { id:'moment', chapter:0, title:'Where would you love to feel that most?', subtitle:'Pick the moment that feels most like your life.',options:[
  {id:'everyday',label:'In my everyday moments',detail:'The school run, coffee, a normal Tuesday',icon:'sun'},
  {id:'social',label:'When I’m out with people',detail:'Dinner, a date, catching up with friends',icon:'heart'},
  {id:'work',label:'When I want to feel put-together',detail:'At work, in meetings, on a busy day',icon:'star'},
  {id:'photos',label:'When the camera comes out',detail:'Be in the moment, and in the photo',icon:'camera'}]},
 { id:'priority', chapter:0, title:'What gets in the way of that feeling?', subtitle:'Choose the one thing you’d most like your routine to help with.',options:[
  {id:'frizz',label:'Frizz that does its own thing',icon:'wind'},
  {id:'dryness',label:'Dry or rough-feeling lengths',icon:'drop'},
  {id:'oil',label:'Roots that feel oily too soon',icon:'sun'},
  {id:'volume',label:'Hair that falls a little flat',icon:'rise'},
  {id:'breakage',label:'Breakage and fragile ends',icon:'shield'},
  {id:'simple',label:'I just want a routine that makes sense',icon:'check'}]},
 { id:'texture',chapter:1,title:'How does your hair naturally take shape?',subtitle:'Think air-dried, without straightening or curling it.', layout:'texture',options:[
  {id:'straight',label:'Straight',detail:'Little to no natural bend',texture:'straight'},
  {id:'wavy',label:'Wavy',detail:'Loose bends and S-shaped waves',texture:'wavy'},
  {id:'curly',label:'Curly',detail:'Defined loops or spirals',texture:'curly'},
  {id:'coily',label:'Coily',detail:'Tight coils or zigzag patterns',texture:'coily'},
  {id:'unsure',label:'A mix / I’m not sure',detail:'You don’t need to fit one category',icon:'spark'}]},
 { id:'scalp',chapter:1,title:'And how do your roots and scalp feel?',subtitle:'Choose what you notice most often between washes.',options:[
  {id:'balanced',label:'Comfortable most of the time',icon:'check'},
  {id:'oily',label:'My roots feel oily quickly',icon:'drop'},
  {id:'dry',label:'My scalp often feels dry or tight',icon:'sun'},
  {id:'sensitive',label:'Often itchy, flaky or easily irritated',icon:'shield'},
  {id:'unsure',label:'It changes / I’m not sure',icon:'spark'}]},
 {id:'wash',chapter:1,title:'What does your wash rhythm look like?',subtitle:'There’s no “good” or “bad” answer. This is your starting point.',options:[
  {id:'daily',label:'Most days',icon:'sun'},
  {id:'few',label:'Every 2–3 days',icon:'calendar'},
  {id:'weekly',label:'Around once a week',icon:'calendar'},
  {id:'less',label:'Less often or whenever it needs it',icon:'flower'}]},
 {id:'ends',chapter:1,title:'How do the lengths and ends feel?',subtitle:'Your roots and ends can tell two different stories.',options:[
  {id:'soft',label:'Mostly soft and easy to manage',icon:'check'},
  {id:'dry',label:'Dry, rough or easily tangled',icon:'drop'},
  {id:'fragile',label:'Fragile, with noticeable breakage',icon:'shield'},
  {id:'heavy',label:'Heavy or weighed down',icon:'wind'},
  {id:'unsure',label:'A bit of a mix',icon:'spark'}]},
 {id:'treatment',chapter:2,title:'What has your hair been through lately?',subtitle:'Pick the closest match for the hair you have now.',options:[
  {id:'natural',label:'No colour or chemical treatments',icon:'flower'},
  {id:'colour',label:'Colour, without lightening',icon:'drop'},
  {id:'bleach',label:'Bleach, highlights or lightening',icon:'sun'},
  {id:'chemical',label:'Relaxing, perming or smoothing treatments',icon:'wind'},
  {id:'mixed',label:'A combination of colour and treatments',icon:'spark'}]},
 {id:'heat',chapter:2,title:'How often do hot tools join the routine?',subtitle:'A hot blow-dry, straightener or curling iron all count.',options:[
  {id:'rare',label:'Rarely or never',icon:'flower'},
  {id:'some',label:'About 1–2 times a week',icon:'sun'},
  {id:'often',label:'Several times a week',icon:'sun'},
  {id:'daily',label:'Most days',icon:'sun'}]},
 {id:'routine',chapter:2,title:'What would make your routine easier to stick to?',subtitle:'A useful routine needs to fit your real life.',options:[
  {id:'less',label:'Fewer products and steps',detail:'Keep it simple',icon:'check'},
  {id:'clarity',label:'Knowing what goes where',detail:'And in what order',icon:'layers'},
  {id:'consistent',label:'A rhythm I can actually keep',detail:'Less starting over',icon:'calendar'},
  {id:'keep',label:'Keeping what already works',detail:'With a few thoughtful tweaks',icon:'flower'}]},
 {id:'time',chapter:2,title:'How much time feels realistic?',subtitle:'For care after washing, before drying or styling.',options:[
  {id:'quick',label:'2–3 minutes',detail:'The essentials, please',icon:'clock'},
  {id:'steady',label:'5–10 minutes',detail:'A little extra care is doable',icon:'clock'},
  {id:'ritual',label:'10–15 minutes',detail:'I enjoy making a moment of it',icon:'heart'}]}
];
export const feelingCopy = {
 confidence:{short:'Feel quietly confident',heading:'A little more confidence. A lot more you.',line:'For the feeling of walking in without second-guessing your hair.'},
 ease:{short:'Feel more at ease',heading:'Less hair admin. More living.',line:'For getting ready, feeling good and getting on with your day.'},
 expression:{short:'Feel like yourself',heading:'Your texture. Your style. Your kind of good.',line:'For wearing your hair in a way that feels like you.'},
 attention:{short:'Enjoy being noticed',heading:'Own your “your hair looks great” moment.',line:'For enjoying the attention while feeling completely yourself.'}
};
export const momentCopy={everyday:'an ordinary day',social:'dinner, a date or time with friends',work:'the days you want to feel put-together',photos:'being in the moment when the camera comes out'};
export function optionLabel(id,value){return questions.find(q=>q.id===id)?.options.find(o=>o.id===value)?.label??'';}
export function validateAnswers(answers){return questions.every(q=>q.options.some(o=>o.id===answers[q.id]));}
export function makeProfile(a){
 if(!validateAnswers(a)) throw new Error('Please finish all questions to see your routine.');
 const treated=a.treatment!=='natural', heat=a.heat!=='rare', delicate=a.ends==='fragile'||a.priority==='breakage';
 const light=a.ends==='heavy'||a.priority==='volume', dry=a.ends==='dry'||a.priority==='dryness'||a.priority==='frizz';
 const scalpLabel={balanced:'Comfortable',oily:'Oily roots',dry:'Dry-feeling scalp',sensitive:'Sensitive-feeling scalp',unsure:'Variable / unsure'}[a.scalp];
 const texture={straight:'Straight',wavy:'Wavy',curly:'Curly',coily:'Coily',unsure:'Mixed / not sure yet'}[a.texture];
 const lengths={soft:'Soft lengths',dry:'Dry-feeling lengths',fragile:'Fragile ends',heavy:'Weighed-down lengths',unsure:'Mixed needs'}[a.ends];
 const priority={frizz:'More manageable hair',dryness:'Softer-feeling lengths',oil:'A comfortable root routine',volume:'Lightness and movement',breakage:'Gentler handling',simple:'A routine you can repeat'}[a.priority];
 let insight;
 if(a.scalp==='sensitive') insight={title:'Comfort comes first.',body:'You mentioned itching, flakes or irritation. Your routine should keep scalp comfort separate from styling goals. If this persists or feels sore, a dermatologist can help you understand the cause.'};
 else if(a.scalp==='oily'&&(a.ends==='dry'||a.ends==='fragile')) insight={title:'Your roots and ends need different things.',body:'You described oily roots and drier or fragile lengths. We’ve separated cleansing at the scalp from conditioning through the lengths, so one concern doesn’t override the other.'};
 else if(a.ends==='heavy'||a.priority==='volume') insight={title:'A lighter touch is your starting point.',body:'You mentioned heaviness or a lack of volume. Start with a small amount of conditioner where it’s needed and change one thing at a time, so you can spot what weighs your hair down.'};
 else if(delicate||treated) insight={title:'Give your lengths a gentler routine.',body:'Your answers mention '+(delicate?'fragile ends':'colour or chemical treatments')+'. We’ve made careful handling a priority, with conditioning through the lengths and no extra steps just for the sake of it.'};
 else if(dry) insight={title:'Start with softness and consistency.',body:'You’d like help with dryness or frizz. We’ve put conditioning and gentler drying at the centre of your routine, while keeping your natural texture in mind.'};
 else insight={title:'Build on what already feels good.',body:'Your answers point towards a simple, repeatable routine. Keep the products that feel comfortable and change only one thing at a time.'};
 const cleanse=a.scalp==='sensitive'
  ?'Choose a gentle shampoo you already tolerate. Cleanse the scalp with your fingertips, without scrubbing or scratching. Avoid adding several new scalp products at once.'
  :a.scalp==='oily'?'Focus shampoo on the scalp and roots. Let how your scalp feels guide wash timing; you don’t need to force longer gaps between washes.'
  :a.scalp==='dry'?'Use a gentle shampoo and focus on the scalp. Notice whether washing leaves it comfortable or tight before changing your usual rhythm.'
  :'Focus shampoo on the scalp and rinse well. Keep your usual wash rhythm as a starting point, adjusting to comfort and buildup.';
 let condition=light?'Start with a small amount of conditioner on the lengths and ends. Rinse well and keep heavy leave-ins away from roots if they flatten your hair.':'Apply conditioner through the lengths and ends. Detangle gently, starting at the ends and working upward; follow the product’s directions.';
 if(a.texture==='curly'||a.texture==='coily') condition+=' For curls and coils, use conditioner for slip while gently detangling damp hair.';
 const finish=heat?'Blot rather than rub with a towel. Before hot tools, use heat protectant as directed and choose a lower heat setting that works for your styling.':a.texture==='curly'||a.texture==='coily'?'Gently squeeze out water, keep handling light as it dries, and let your natural pattern settle. Add a small amount of a familiar styling product if you like.':'Blot rather than rub with a towel. Let your hair dry in the way that feels easiest; start with little or no extra product and see how it feels.';
 const extras=a.time==='quick'?'Keep it to these three steps. No mask or extra treatment is needed just to complete the routine.':a.time==='steady'?'Use the extra minutes for gentle detangling. Add a leave-in only if your lengths still feel dry, following the product directions.':'If you enjoy a longer ritual, take your time detangling or use a conditioning mask according to its directions. More time doesn’t require more products.';
 const pace={quick:'2–3 minutes',steady:'5–10 minutes',ritual:'10–15 minutes'}[a.time];
 const commitment={less:'Keep your essentials together. Skip optional products until you know what you miss.',clarity:'Follow this order: cleanse the scalp → condition the lengths → dry and style gently.',consistent:'Choose one small change for your next wash and repeat it before adding another.',keep:'Keep what already works. Use this routine to choose just one adjustment.'}[a.routine];
 return {feeling:feelingCopy[a.feeling],moment:momentCopy[a.moment],texture,scalpLabel,lengths,priority,insight,pace,extras,commitment,heat,treated,delicate,steps:[{title:'Cleanse for comfort',zone:'SCALP & ROOTS',text:cleanse},{title:light?'Condition with a lighter touch':'Give your lengths some care',zone:'LENGTHS & ENDS',text:condition},{title:heat?'Protect your styling moment':'Finish gently',zone:'DRYING & STYLING',text:finish}], facts:[{label:'Natural texture',value:texture,source:'texture'},{label:'Scalp & roots',value:scalpLabel,source:'scalp'},{label:'Lengths & ends',value:lengths,source:'ends'},{label:'Hot tools',value:{rare:'Rarely or never',some:'1–2 times / week',often:'Several times / week',daily:'Most days'}[a.heat],source:'heat'}]};
}
