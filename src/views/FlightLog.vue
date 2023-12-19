<script setup>
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from "@coreui/vue";
import { right } from "@popperjs/core";
</script>

<template>
  <div style="padding: 2rem 4rem 1rem 4rem">
    <h2 class="text">
      Flight Log
      <img
        style="display: inline; width: 35px"
        src="../assets/emoji/plane.svg"
        alt="plane"
      />
    </h2>
    <br />
    <h6 class="text">Hover on reg, airline and airport code to see details!</h6>
    <div class="ft-container">
      <CTable class="flight-table" hover striped borderless>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell
              scope="col"
              v-for="(header, key) in content.meta.fields"
              v-bind:key="'header-' + key"
            >
              {{ header.replace(/\s/g, "") }}
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow
            v-for="(_, rowKey) in content.data"
            v-bind:key="'row-' + rowKey"
          >
            <CTableHeaderCell>
              {{ rowKey + 1 }}
            </CTableHeaderCell>
            <CTableDataCell
              v-for="(column, columnKey) in content.meta.fields"
              v-bind:key="'row-' + rowKey + '-column-' + columnKey"
              class="data-cell"
            >
              <div v-if="column == 'Airline'">
                <div
                  v-tooltip="{
                    content: airlines[content.data[rowKey][column]],
                    html: true,
                    placement: right,
                  }"
                  style="text-decoration: underline"
                >
                  {{ content.data[rowKey][column].replace(/\s/g, "") }}
                </div>
              </div>
              <div v-else-if="column == 'From' || column == 'To'">
                <div
                  v-tooltip="{
                    content: airports[content.data[rowKey][column]],
                    html: true,
                    placement: right,
                  }"
                  style="text-decoration: underline"
                >
                  {{ content.data[rowKey][column].replace(/\s/g, "") }}
                </div>
              </div>
              <div v-else-if="column == 'Reg'">
                <div
                  v-tooltip="{
                    content:
                      '<div><img src=' +
                      'https://cdn.jetphotos.com/400' + content.data[rowKey][column].split('|')[2] +
                      '></div>',
                    html: true,
                    placement: right,
                  }"
                >
                  <div>
                    <img :src="require(`@/assets/img/${content.data[rowKey][column].split('|')[0]}.gif`)" height="12" class="reg-flag">
                    <a
                      :href="'https://cdn.jetphotos.com/full' + content.data[rowKey][column].split('|')[2]"
                      class="black-link"
                    >
                      {{
                        content.data[rowKey][column].split("|")[1]
                      }}
                    </a>
                  </div>
                </div>
              </div>
              <div v-else>
                {{ content.data[rowKey][column].replace(/\s/g, "") }}
              </div>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </div>
  </div>
</template>

<style scoped>
.ft-container {
  padding: 0.5rem 2rem 0rem 2rem;
  font-family: "Courier New", Courier, monospace;
}
.flight-table {
  padding: 0.5rem 2rem 0rem 2rem;
  opacity: 100%;
}
.text {
  padding: 0em 1rem 0rem 1rem;
  display: inline;
  font-family: Courier, Courier, monospace;
  font-weight: bold;
}
.reg-flag {
  margin-bottom: 0.1rem;
  margin-right: 0.2rem;
}
.link-hover {
  background-color: black;
  color: white;
}
.data-cell {
  font-weight: bold;
  color: black;
}
.black-link {
  color: black;
  background-color: none;
}
.black-link:hover {
  color: white;
  background-color: black;
}
</style>

<script>
import Papa from "papaparse";
export default {
  created: function () {
    this.parseFile();
  },
  methods: {
    parseFile() {
      Papa.parse(this.raw, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          this.content = results;
        },
      });
    },
  },
  mounted() {
    document.title = "Flight Log";
  },
  data() {
    let content = {};
    const airlines = {
      AAL: "American Airlines",
      AMU: "Air Macau",
      ARG: "Aerolíneas Argentinas",
      CCA: "Air China",
      CDG: "Shandong Airlines",
      CES: "China Eastern Airlines",
      CHH: "Hainan Airlines",
      CPA: "Cathay Pacific",
      CQH: "Spring Airlines",
      CSH: "Shanghai Airlines",
      CSN: "China Southern Airlines",
      CXA: "Xiamen Air",
      DKH: "Juneyao Airlines",
      DSM: "LATAM Argentina",
      GAP: "AirPhil Express",
      HDA: "Dragon Air",
      JBU: "JetBlue",
      MXY: "Breeze Airways",
      PAL: "Philippine Airlines",
      RLH: "Ruili Airlines",
      RPA: "Republic Airways",
      THY: "Turkish Airlines",
      UAL: "United Airlines",
    };
    const airports = {
      AEP: "Buenos Aires Aeroparque Jorge Newbery",
      BKK: "Bangkok Suvarnabhumi",
      BOS: "Boston Logan",
      CAN: "Guangzhou Baiyun",
      CLT: "Charlotte Douglas",
      DLU: "Dali Huangcaoba",
      DTW: "Detroit Metropolitan",
      DYG: "Zhangjiajie Hehua",
      EWR: "Newark Liberty",
      EZE: "Buenos Aires Ministro Pistarini",
      FTE: "El Calafate",
      GRU: "São Paulo Guarulhos",
      HKG: "Hong Kong Chek Lap Kok",
      IST: "Istanbul",
      IGR: "Cataratas del Iguazú",
      JJN: "Quanzhou Jinjiang",
      KMG: "Kunming Changshui",
      LAX: "Los Angeles",
      MFM: "Macau",
      MNL: "Manila Ninoy Aquino",
      MPH: "Catican/Boracay",
      PVD: "Rhode Island T.F. Green",
      PVG: "Shanghai Pudong",
      SEA: "Seattle Tacoma",
      SHA: "Shanghai Hongqiao",
      SZX: "Shenzhen Bao'an",
      TFU: "Chengdu Tianfu",
      USH: "Ushuaia Malvinas Argentinas",
      WUX: "Sunan Shuofang",
      XMN: "Xiamen Gaoqi",
      XIY: "Xi'an Xianyang",
      ZHA: "Zhanjiang",
    };
    const raw = `Date,Flight,Reg,From,To,Dist,Dep,Arr,Airline,Aircraft,Seat
2023/12/17,UA2490,N|N67134|/6/60484_1662421793.jpg,EWR,LAX,2450,18:33,21:03,UAL,B757-224,32F
2023/12/17,UA3590,N|N766YX|/6/748343_1697722673.jpg,PVD,EWR,160,13:06,13:56,RPA,ERJ-175LR,19D
2023/11/28,AA1254,N|N576UW|/5/62545_1605700249.jpg,CLT,PVD,683,07:31,08:57,AAL,A321-231,14F
2023/11/27,AA611,N|N563UW|/5/21866_1566281141.jpg,SEA,CLT,2275,22:22,05:38,AAL,A321-231,21F
2023/11/22,B6197,N|N961JT|/6/466794_1693976928.jpg,BOS,SEA,2489,20:22,23:19,JBU,A321-231,16F
2023/09/08,B62036,N|N3125J|/6/640394_1693483459.jpg,DTW,BOS,621,09:09,10:33,JBU,A220-371,18F
2023/09/02,B61037,N|N318JB|/6/90637_1652053492.jpg,BOS,DTW,621,17:26,19:12,JBU,ERJ-190AR,6D
2023/08/30,MX701,N|N216BZ|/5/1226511_1688864273.jpg,LAX,PVD,2587,12:26,20:23,MXY,A220-371,5A
2023/08/11,PR102,RP|RP-C7777|/5/96935_1652696389.jpg,MNL,LAX,7296,22:39,20:11,PAL,B777-36N(ER),51A
2023/08/11,PR357,RP|RP-C9907|/5/99578_1512987831.jpg,JJN,MNL,729,15:22,17:50,PAL,A321-231,43K
2023/07/06,HO1060,B|B-8587|/5/23047_1573133699.jpg,TFU,SHA,1006,20:48,22:56,DKH,A321-231,34A
2023/06/30,HO1059,B|B-8068|/6/48107_1625045717.jpg,SHA,TFU,1107,17:24,20:05,DKH,A321-211,41K
2023/05/15,9C8922,B|B-6852|/5/83777_1559148550.jpg,HKG,PVG,772,18:05,20:11,CQH,A320-214,7A
2023/05/12,CX365,HK|B-LAA|/5/1606889_1686112376.jpg,PVG,HKG,779,10:06,12:16,CPA,A330-342,54K
2021/05/07,DR5310,B|B-7866|/6/99111_1621348608.jpg,XIY,WUX,606,11:38,14:05,RLH,B737-86J,7A
2021/05/04,CZ5791,B|B-6135|/6/76682_1645366796.jpg,PVG,XIY,688,10:22,12:40,CSN,A330-223,45K
2020/02/02,MU506,B|B-6926|/5/66757_1582880782.jpg,HKG,PVG,781,20:20,22:54,CES,A321-231,35A
2020/02/02,TK70,TC|TC-LJE|/5/16090_1580077654.jpg,IST,HKG,4980,02:00,17:00,THY,B777-3F2(ER),16A
2020/02/01,TK16,TC|TC-JJU|/6/11623_1585460432.jpg,GRU,IST,6569,04:05,22:30,THY,B777-3F2(ER),41K
2020/02/02,TK16,TC|TC-JJU|/5/23788_1596117261.jpg,EZE,GRU,1071,23:50,02:25,THY,B777-3F2(ER),44K
2020/01/29,AR1897,LV|LV-GVC|/6/74980_1535416733.jpg,USH,AEP,1481,15:20,18:40,ARG,B737-887,20F
2020/01/26,LA7741,LV|LV-BHU|/5/18980_1565738801.jpg,FTE,USH,353,12:20,13:14,DSM,A320-233,12A
2020/01/23,LA7732,LV|LV-BFO|/5/44799_1497677728.jpg,AEP,FTE,1287,08:35,11:35,DSM,A320-233,3L
2020/01/19,LA7507,LV|LV-FUX|/6/20116_1558931099.jpg,IGR,AEP,654,16:18,17:34,DSM,A320-233,5L
2020/01/17,LA7508,LV|LV-BRA|/6/66313_1591416668.jpg,AEP,IGR,654,19:10,20:48,DSM,A320-233,8L
2020/01/02,TK15,TC|TC-JJG|/5/97795_1574616837.jpg,GRU,EZE,1071,19:30,22:25,THY,B777-3F2(ER),35A
2020/01/02,TK16,TC|TC-JJG|/5/11944_1593669951.jpg,IST,GRU,6569,10:10,18:05,THY,B777-3F2(ER),35A
2020/01/01,TK27,TC|TC-JJM|/6/60357_1555094481.jpg,PVG,IST,4988,23:05,06:15,THY,B777-3F2(ER),33K
2019/08/29,9C8838,B|B-8370|/5/43386_1572049955.jpg,XMN,SHA,500,14:55,16:45,CQH,A320-214,6E
2019/07/10,9C8856,B|B-6751|/6/19520_1562586205.jpg,CAN,SHA,731,16:10,18:30,CQH,A320-214,NA
2019/07/06,HU7208,B|B-1133|/5/13829_1581584836.jpg,PVG,SZX,767,11:55,14:30,CHH,B787-9,42A
2019/06/15,CZ3908,B|B-6059|/6/38670_1548129801.jpg,SHA,PEK,669,11:45,14:10,CSN,A330-243,40K
2018/08/05,HU7141,B|B-1543|/6/31332_1529068246.jpg,CAN,PVG,748,12:35,14:55,CHH,B787-9,44J
2018/07/31,MU5315,B|B-1320|/5/59368_1521874266.jpg,SHA,CAN,731,19:30,21:50,CES,B737-89P,36K
2017/07/15,HU7207,B|B-1501|/5/17741_1595344859.jpg,SZX,PVG,767,08:20,10:40,CHH,B737-84P,39A
2017/07/09,CA1893,B|B-1833|/6/86211_1529521353.jpg,PVG,SZX,767,07:25,10:00,CCA,A321-232,32A
2016/07/04,FM9452,B|B-2567|/5/34480_1500116963.jpg,KMG,SHA,1210,13:45,17:10,CSH,B767-36D,35J
2016/07/03,MU5944,B|B-5809|/4/14636_1394874374.jpg,DLU,KMG,158,17:30,18:25,CES,B737-79P,38A
2016/06/30,MU5941,B|B-5256|/5/43513_1514700825.jpg,KMG,DLU,158,09:05,09:50,CES,B737-79P,37L
2016/06/29,HO1121,B|B-6572|/5/58278_1410430837.jpg,SHA,KMG,1210,08:35,11:50,DKH,A320-214,8A
2015/10/06,MF8372,B|B-2869|/6/22788_1529043616.jpg,KMG,DLU,752,13:30,16:05,CXA,B757-25C,61A
2015/10/03,FM9387,B|B-5261|/5/39035_1542637481.jpg,PVG,ZHA,987,16:35,19:25,CSH,B737-76D,35A
2015/08/28,FM9344,B|B-1720|/6/94581_1479140592.jpg,DYG,PVG,693,20:45,22:40,CSH,B737-86D,34A
2015/08/24,FM9343,B|B-5131|/5/85827_1476071738.jpg,PVG,DYG,693,20:05,22:55,CSH,B737-8Q8,34A
2015/08/22,9C8838,B|B-6301|/5/36428_1578705790.jpg,XMN,SHA,500,15:05,17:00,CQH,A320-214,N/A
2015/08/17,SC4942,B|B-5348|/5/89469_1545554789.jpg,PVG,XMN,500,11:25,13:20,CDG,B737-85N,16A
2014/07/02,MF8567,B|B-5028|/5/36550_1522996209.jpg,XMN,SHA,500,11:00,12:30,CXA,B737-75C,46L
2014/06/27,MF8412,B|B-5602|/5/64242_1592820324.jpg,SHA,XMN,500,11:20,12:50,CXA,B737-86N,N/A
2013/07/04,FM542,B|B-2566|/5/67154_1579517515.jpg,BKK,PVG,1802,16:50,22:10,CSH,B767-36D(ER),35J
2013/06/30,MU547,B|B-6052|/3/86796_1328658765.jpg,PVG,BKK,1802,21:40,00:55,CES,A340-642,N/A
2011/07/12,MU2008,B|N/A|/2/94371_1210260562.jpg,MFM,PVG,803,16:00,18:10,CES,A320,N/A
2011/07/07,MU2007,B|N/A|/3/95532_1315723769.jpg,PVG,MFM,803,12:25,15:00,CES,A320,N/A
2011/01/29,PR336,RP|N/A|/4/69641_1355460611.jpg,MNL,PVG,1152,12:05,15:50,PAL,A330-301,N/A
2011/01/20,PR337,RP|N/A|/2/58434_1264343842.jpg,PVG,MNL,1152,16:55,20:50,PAL,A320-214,N/A
2010/10/06,KA892,HK|N/A|/4/42302_1339158842.jpg,HKG,PVG,781,16:00,18:40,HDA,A321-231,N/A
2010/10/06,CX906,HK|N/A|/6/51688_1444341754.jpg,MNL,HKG,??,10:50,13:30,CPA,A340-313X,N/A
2010/10/05,2P74,RP|N/A|/5/53328_1457690683.jpg,MPH,MNL,??,??,??,GAP,Dash8-Q314,N/A
2010/10/03,2P??,RP|RP-C3016|/3/92542_1334287404.jpg,MNL,MPH,??,??,??,GAP,Dash8-Q314,N/A
2010/10/02,CX918,HK|N/A|/6/79922_1417706255.jpg,HKG,MNL,712,14:20,16:35,CPA,B744,N/A
2010/10/02,KA831,HK|B-HYF|/1/27982_1299503451.jpg,PVG,HKG,781,08:40,11:35,HDA,A330-342,N/A
2010/08/31,PR336,RP|N/A|/4/79172_1321131511.jpg,MNL,PVG,1152,12:05,15:50,PAL,A330-301,N/A
2010/08/26,PR337,RP|N/A|/6/17299_1586238940.jpg,PVG,MNL,1152,16:55,20:50,PAL,A330-301,N/A
2010/06/29,NX110,MO|N/A|/2/49528_1214997745.jpg,MFM,PVG,803,??,??,AMU,A319-132,N/A
2010/06/25,NX107,MO|N/A|/1/56248_1117980108.jpg,PVG,MFM,803,??,??,AMU,A319-132,N/A`;
    return {
      raw: raw,
      content: content,
      airlines: airlines,
      airports: airports,
    };
  },
};
</script>
