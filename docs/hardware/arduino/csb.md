# 超声波传感器

## 什么是超声波传感器

![er](/imgs/hardware/csb.png)

<DocsAD/>

```JS
位移 = 速度 * 时间

声波速度 = 340m/s
返回时间 = 已知
```

## Ardunio代码

```JS


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

  if(Distance_cm < 10){
    digitalWrite(LED,HIGH);
  }else{
    digitalWrite(LED,LOW);
  }
  
  Serial.print("Distance = ");             // Output to serial
  Serial.print(Distance_cm);
  Serial.println(" cm");
 
  delay(1000);                             // Wait to do next measurement
}

long Distance(long time)
{
    long DistanceCalc;                      // Calculation variable
    DistanceCalc = time*0.034/2;
    return DistanceCalc;                    // return calculated value
}



```
