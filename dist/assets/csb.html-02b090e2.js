import{_ as e,K as s,L as d,a5 as l,W as i,F as a}from"./framework-edebdfe1.js";const r="/imgs/hardware/csb.png",c={},v=i('<h1 id="超声波传感器" tabindex="-1"><a class="header-anchor" href="#超声波传感器" aria-hidden="true">#</a> 超声波传感器</h1><h2 id="什么是超声波传感器" tabindex="-1"><a class="header-anchor" href="#什么是超声波传感器" aria-hidden="true">#</a> 什么是超声波传感器</h2><p><img src="'+r+'" alt="er" loading="lazy"></p>',3),t=i(`<div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>位移 = 速度 * 时间

声波速度 = 340m/s
返回时间 = 已知
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ardunio代码" tabindex="-1"><a class="header-anchor" href="#ardunio代码" aria-hidden="true">#</a> Ardunio代码</h2><div class="language-JS line-numbers-mode" data-ext="JS"><pre class="language-JS"><code>

const int TriggerPin = 8;      //Trig pin
const int EchoPin = 9;         //Echo pin
const int LED = 13;
long Duration = 0;

void setup(){
  pinMode(TriggerPin,OUTPUT);  // Trigger is an output pin
  pinMode(EchoPin,INPUT);      // Echo is an input pin
  pinMode(LED,OUTPUT);
  Serial.begin(9600);          // Serial Output
}

void loop(){ 
  digitalWrite(TriggerPin, LOW);                   
  delayMicroseconds(2);
  
  digitalWrite(TriggerPin, HIGH);          // Trigger pin to HIGH
  delayMicroseconds(10);                   // 10us high 
  digitalWrite(TriggerPin, LOW);           // Trigger pin to HIGH
 
  Duration = pulseIn(EchoPin,HIGH);        // Waits for the echo pin to get high
                                           // returns the Duration in microseconds
  long Distance_cm = Distance(Duration);   // Use function to calculate the distance

  if(Distance_cm &lt; 10){
    digitalWrite(LED,HIGH);
  }else{
    digitalWrite(LED,LOW);
  }
  
  Serial.print(&quot;Distance = &quot;);             // Output to serial
  Serial.print(Distance_cm);
  Serial.println(&quot; cm&quot;);
 
  delay(1000);                             // Wait to do next measurement
}

long Distance(long time)
{
    long DistanceCalc;                      // Calculation variable
    DistanceCalc = time*0.034/2;
    return DistanceCalc;                    // return calculated value
}



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function u(o,m){const n=a("DocsAD");return s(),d("div",null,[v,l(n),t])}const g=e(c,[["render",u],["__file","csb.html.vue"]]);export{g as default};
