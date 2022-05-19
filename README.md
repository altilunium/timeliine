# timeliine
Timeline maker, based on D3.js

## Quickstart
![Demo image](https://raw.githubusercontent.com/altilunium/timeliine/main/Screenshot_57.png)
```
<script src="d3min.js"></script>
<script src="timeliinemin.js"></script>
<div id="scale"></div>
<script>
  li_setup("#scale","1990","2022")
  var baseb = 620
  var base = baseb
  var gap = 15
  stamp("16 Jan 1996","Event A",base)
  base += gap
  stamp("30 Mei 1998","Event B",base)
  stamp("6 Nov 1999","Event C",base)
  base = baseb
  stamp("28 Feb 2003","Event D",base)
</script>
```
Demo : https://altilunium.github.io/timeliine/

## Documentation

### li_setup(DOM_ID,min_timestamp,max_timestamp)
Setup the timeline
### stamp(event_timestamp, label, label_height)
Add a event to the timeline

### Timestamp Format
It accepts four different format : 
* 23 Apr 2022 16:21   
* 23 Apr 2022
* Apr 2022
* 2022

Accepted month format : Jan/Feb/Mar/Apr/May/Jun/Jul/Aug/Sep/Oct/Nov/Dec (Case Sensitive)
