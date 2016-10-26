
var cont = document.getElementById('cy');

var cy = cytoscape({

container: cont, // container to render in

elements: [ // list of graph elements to start with
{ // node Rv2703(SigA)
  data: { id: 'Rv2703(SigA)' },
  classes: 'regulated'
},
{ // node BCG0163c(FbpC)
  data: { id: 'BCG0163c(FbpC)' },
  classes: 'regulated'
},
{ // node BCG0389(DnaK)
  data: { id: 'BCG0389(DnaK)' },
  classes: 'regulated'
},
{ // node BCG0479(GroEL2)
  data: { id: 'BCG0479(GroEL2)' },
  classes: 'regulated'
},
{ // node BCG1281(SigE)
  data: { id: 'BCG1281(SigE)' },
  classes: 'regulated'
},
{ // node BCG1426c(Unannotated)
  data: { id: 'BCG1426c(Unannotated)' },
  classes: 'regulated'
},
{ // node BCG1776c(NarK2)
  data: { id: 'BCG1776c(NarK2)' },
  classes: 'regulated'
},
{ // node BCG1947c(KatG)
  data: { id: 'BCG1947c(KatG)' },
  classes: 'regulated'
},
{ // node BCG1948c(FurA)
  data: { id: 'BCG1948c(FurA)' },
  classes: 'regulated'
},
{ // node BCG2716(SigA)
  data: { id: 'BCG2716(SigA)' },
  classes: 'regulated'
},
{ // node BCG2724(IdeR)
  data: { id: 'BCG2724(IdeR)' },
  classes: 'regulated'
},
{ // node BCG2897(Mpb70)
  data: { id: 'BCG2897(Mpb70)' },
  classes: 'regulated'
},
{ // node BCG2962c(Mas)
  data: { id: 'BCG2962c(Mas)' },
  classes: 'regulated'
},
{ // node BCG3487c(GroEL1)
  data: { id: 'BCG3487c(GroEL1)' },
  classes: 'regulated'
},
{ // node BCG3865c(FbpD)
  data: { id: 'BCG3865c(FbpD)' },
  classes: 'regulated'
},
{ // node BCG3866c(FbpA)
  data: { id: 'BCG3866c(FbpA)' },
  classes: 'regulated'
},
{ // node BCG3917c(EthA)
  data: { id: 'BCG3917c(EthA)' },
  classes: 'regulated'
},
{ // node L5p71(Unannotated)
  data: { id: 'L5p71(Unannotated)' },
  classes: 'regulated'
},
{ // node L5p88(Unannotated)
  data: { id: 'L5p88(Unannotated)' },
  classes: 'regulated'
},
{ // node MAP2028c(Unannotated)
  data: { id: 'MAP2028c(Unannotated)' },
  classes: 'regulated'
},
{ // node ML1795(Hsp18)
  data: { id: 'ML1795(Hsp18)' },
  classes: 'regulated'
},
{ // node ML2041(OxyR)
  data: { id: 'ML2041(OxyR)' },
  classes: 'regulated'
},
{ // node ML2042(AhpC)
  data: { id: 'ML2042(AhpC)' },
  classes: 'regulated'
},
{ // node MLr01(Rrs)
  data: { id: 'MLr01(Rrs)' },
  classes: 'regulated'
},
{ // node MSMEG_0005(GyrB)
  data: { id: 'MSMEG_0005(GyrB)' },
  classes: 'regulated'
},
{ // node MSMEG_0014(Unannotated)
  data: { id: 'MSMEG_0014(Unannotated)' },
  classes: 'regulated'
},
{ // node MSMEG_1398(RpsL)
  data: { id: 'MSMEG_1398(RpsL)' },
  classes: 'regulated'
},
{ // node MSMEG_1914(Unannotated)
  data: { id: 'MSMEG_1914(Unannotated)' },
  classes: 'regulated'
},
{ // node MSMEG_2750(Unannotated)
  data: { id: 'MSMEG_2750(Unannotated)' },
  classes: 'regulated'
},
{ // node MSMEG_2752(Unannotated)
  data: { id: 'MSMEG_2752(Unannotated)' },
  classes: 'regulated'
},
{ // node MSMEG_2758(Unannotated)
  data: { id: 'MSMEG_2758(Unannotated)' },
  classes: 'regulated'
},
{ // node MSMEG_3757(RrsA)
  data: { id: 'MSMEG_3757(RrsA)' },
  classes: 'regulated'
},
{ // node MSMEG_4931(RrsB)
  data: { id: 'MSMEG_4931(RrsB)' },
  classes: 'regulated'
},
{ // node MSMEG_5072(Extracyto_function_alt_sigma_factor)
  data: { id: 'MSMEG_5072(Extracyto_function_alt_sigma_factor)' },
  classes: 'regulated'
},
{ // node MSMEG_6257(Unannotated)
  data: { id: 'MSMEG_6257(Unannotated)' },
  classes: 'regulated'
},
{ // node rRNA(Rrs)
  data: { id: 'rRNA(Rrs)' },
  classes: 'regulated'
},
{ // node Rv0006(GyrA)
  data: { id: 'Rv0006(GyrA)' },
  classes: 'regulated'
},
{ // node Rv0405(Pks6)
  data: { id: 'Rv0405(Pks6)' },
  classes: 'regulated'
},
{ // node Rv0430(Unannotated)
  data: { id: 'Rv0430(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv0534c(MenA)
  data: { id: 'Rv0534c(MenA)' },
  classes: 'regulated'
},
{ // node Rv0780(PurC)
  data: { id: 'Rv0780(PurC)' },
  classes: 'regulated'
},
{ // node Rv0803(PurL)
  data: { id: 'Rv0803(PurL)' },
  classes: 'regulated'
},
{ // node Rv1266c(PknH)
  data: { id: 'Rv1266c(PknH)' },
  classes: 'regulated'
},
{ // node Rv1303(Unannotated)
  data: { id: 'Rv1303(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv1394c(Cyp132)
  data: { id: 'Rv1394c(Cyp132)' },
  classes: 'regulated'
},
{ // node Rv1395(Unannotated)
  data: { id: 'Rv1395(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv1846c(Unannotated)
  data: { id: 'Rv1846c(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv1847(Unannotated)
  data: { id: 'Rv1847(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv1876(BfrA)
  data: { id: 'Rv1876(BfrA)' },
  classes: 'regulated'
},
{ // node Rv1886c(FbpB)
  data: { id: 'Rv1886c(FbpB)' },
  classes: 'regulated'
},
{ // node Rv1964(YrbE3A)
  data: { id: 'Rv1964(YrbE3A)' },
  classes: 'regulated'
},
{ // node Rv2031c(HspX)
  data: { id: 'Rv2031c(HspX)' },
  classes: 'regulated'
},
{ // node Rv2122c(HisE)
  data: { id: 'Rv2122c(HisE)' },
  classes: 'regulated'
},
{ // node Rv2150c(FtsZ)
  data: { id: 'Rv2150c(FtsZ)' },
  classes: 'regulated'
},
{ // node Rv2220(GlnA1)
  data: { id: 'Rv2220(GlnA1)' },
  classes: 'regulated'
},
{ // node Rv2280(Unannotated)
  data: { id: 'Rv2280(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv2383c(MbtB)
  data: { id: 'Rv2383c(MbtB)' },
  classes: 'regulated'
},
{ // node Rv2386c(MbtI)
  data: { id: 'Rv2386c(MbtI)' },
  classes: 'regulated'
},
{ // node Rv2416c(Eis)
  data: { id: 'Rv2416c(Eis)' },
  classes: 'regulated'
},
{ // node Rv2589(GabT)
  data: { id: 'Rv2589(GabT)' },
  classes: 'regulated'
},
{ // node Rv2710(SigB)
  data: { id: 'Rv2710(SigB)' },
  classes: 'regulated'
},
{ // node Rv2719c(Unannotated)
  data: { id: 'Rv2719c(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv2720(LexA)
  data: { id: 'Rv2720(LexA)' },
  classes: 'regulated'
},
{ // node Rv2737c(RecA)
  data: { id: 'Rv2737c(RecA)' },
  classes: 'regulated'
},
{ // node Rv3082c(VirS)
  data: { id: 'Rv3082c(VirS)' },
  classes: 'regulated'
},
{ // node Rv3223c(SigH)
  data: { id: 'Rv3223c(SigH)' },
  classes: 'regulated'
},
{ // node Rv3246c(MtrA)
  data: { id: 'Rv3246c(MtrA)' },
  classes: 'regulated'
},
{ // node Rv3402c(Unannotated)
  data: { id: 'Rv3402c(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv3416(WhiB3)
  data: { id: 'Rv3416(WhiB3)' },
  classes: 'regulated'
},
{ // node Rv3810(PirG)
  data: { id: 'Rv3810(PirG)' },
  classes: 'regulated'
},
{ // node Rv3874(EsxB)
  data: { id: 'Rv3874(EsxB)' },
  classes: 'regulated'
},
{ // node BCG0248(PckA)
  data: { id: 'BCG0248(PckA)' },
  classes: 'regulated'
},
{ // node BCG1138c(GreA)
  data: { id: 'BCG1138c(GreA)' },
  classes: 'regulated'
},
{ // node BCG3090(Mmr)
  data: { id: 'BCG3090(Mmr)' },
  classes: 'regulated'
},
{ // node rrs(16S_rRNA)
  data: { id: 'rrs(16S_rRNA)' },
  classes: 'regulated'
},
{ // node Rv0142(Unannotated)
  data: { id: 'Rv0142(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv0251c(Hsp)
  data: { id: 'Rv0251c(Hsp)' },
  classes: 'regulated'
},
{ // node Rv0350(DnaK)
  data: { id: 'Rv0350(DnaK)' },
  classes: 'regulated'
},
{ // node Rv0355c(PPE8)
  data: { id: 'Rv0355c(PPE8)' },
  classes: 'regulated'
},
{ // node Rv0384c(ClpB)
  data: { id: 'Rv0384c(ClpB)' },
  classes: 'regulated'
},
{ // node Rv0991c(Unannotated)
  data: { id: 'Rv0991c(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv1221(SigE)
  data: { id: 'Rv1221(SigE)' },
  classes: 'regulated'
},
{ // node Rv1334(Unannotated)
  data: { id: 'Rv1334(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv1471(TrxB1)
  data: { id: 'Rv1471(TrxB1)' },
  classes: 'regulated'
},
{ // node Rv1528c(PapA4)
  data: { id: 'Rv1528c(PapA4)' },
  classes: 'regulated'
},
{ // node Rv1645c(Unannotated)
  data: { id: 'Rv1645c(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv2466c(Unannotated)
  data: { id: 'Rv2466c(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv2699c(Unannotated)
  data: { id: 'Rv2699c(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv2706c(Unannotated)
  data: { id: 'Rv2706c(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv3054c(Unannotated)
  data: { id: 'Rv3054c(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv3206c(MoeB1)
  data: { id: 'Rv3206c(MoeB1)' },
  classes: 'regulated'
},
{ // node Rv3463(Unannotated)
  data: { id: 'Rv3463(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv3913(TrxB2)
  data: { id: 'Rv3913(TrxB2)' },
  classes: 'regulated'
},
{ // node Rv0467(Icl)
  data: { id: 'Rv0467(Icl)' },
  classes: 'regulated'
},
{ // node Rv0468(FadB2)
  data: { id: 'Rv0468(FadB2)' },
  classes: 'regulated'
},
{ // node Rv0563(HtpX)
  data: { id: 'Rv0563(HtpX)' },
  classes: 'regulated'
},
{ // node Rv0981(MprA)
  data: { id: 'Rv0981(MprA)' },
  classes: 'regulated'
},
{ // node Rv1057(Unannotated)
  data: { id: 'Rv1057(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv1130(Unannotated)
  data: { id: 'Rv1130(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv1329c(DinG)
  data: { id: 'Rv1329c(DinG)' },
  classes: 'regulated'
},
{ // node Rv2053c(Unannotated)
  data: { id: 'Rv2053c(Unannotated)' },
  classes: 'regulated'
},
{ // node Rv2745c(Unannotated)
  data: { id: 'Rv2745c(Unannotated)' },
  classes: 'regulated'
},
	{// edge Rv2703(SigA).BCG0163c(FbpC)
  data: { id: 'Rv2703(SigA).BCG0163c(FbpC)', source: 'Rv2703(SigA)', target: 'BCG0163c(FbpC)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).BCG0389(DnaK)
  data: { id: 'Rv2703(SigA).BCG0389(DnaK)', source: 'Rv2703(SigA)', target: 'BCG0389(DnaK)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).BCG0479(GroEL2)
  data: { id: 'Rv2703(SigA).BCG0479(GroEL2)', source: 'Rv2703(SigA)', target: 'BCG0479(GroEL2)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).BCG1281(SigE)
  data: { id: 'Rv2703(SigA).BCG1281(SigE)', source: 'Rv2703(SigA)', target: 'BCG1281(SigE)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).BCG1426c(Unannotated)
  data: { id: 'Rv2703(SigA).BCG1426c(Unannotated)', source: 'Rv2703(SigA)', target: 'BCG1426c(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).BCG1776c(NarK2)
  data: { id: 'Rv2703(SigA).BCG1776c(NarK2)', source: 'Rv2703(SigA)', target: 'BCG1776c(NarK2)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).BCG1947c(KatG)
  data: { id: 'Rv2703(SigA).BCG1947c(KatG)', source: 'Rv2703(SigA)', target: 'BCG1947c(KatG)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).BCG1948c(FurA)
  data: { id: 'Rv2703(SigA).BCG1948c(FurA)', source: 'Rv2703(SigA)', target: 'BCG1948c(FurA)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).BCG2716(SigA)
  data: { id: 'Rv2703(SigA).BCG2716(SigA)', source: 'Rv2703(SigA)', target: 'BCG2716(SigA)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).BCG2724(IdeR)
  data: { id: 'Rv2703(SigA).BCG2724(IdeR)', source: 'Rv2703(SigA)', target: 'BCG2724(IdeR)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).BCG2897(Mpb70)
  data: { id: 'Rv2703(SigA).BCG2897(Mpb70)', source: 'Rv2703(SigA)', target: 'BCG2897(Mpb70)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).BCG2962c(Mas)
  data: { id: 'Rv2703(SigA).BCG2962c(Mas)', source: 'Rv2703(SigA)', target: 'BCG2962c(Mas)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).BCG3487c(GroEL1)
  data: { id: 'Rv2703(SigA).BCG3487c(GroEL1)', source: 'Rv2703(SigA)', target: 'BCG3487c(GroEL1)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).BCG3865c(FbpD)
  data: { id: 'Rv2703(SigA).BCG3865c(FbpD)', source: 'Rv2703(SigA)', target: 'BCG3865c(FbpD)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).BCG3866c(FbpA)
  data: { id: 'Rv2703(SigA).BCG3866c(FbpA)', source: 'Rv2703(SigA)', target: 'BCG3866c(FbpA)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).BCG3917c(EthA)
  data: { id: 'Rv2703(SigA).BCG3917c(EthA)', source: 'Rv2703(SigA)', target: 'BCG3917c(EthA)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).L5p71(Unannotated)
  data: { id: 'Rv2703(SigA).L5p71(Unannotated)', source: 'Rv2703(SigA)', target: 'L5p71(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).L5p88(Unannotated)
  data: { id: 'Rv2703(SigA).L5p88(Unannotated)', source: 'Rv2703(SigA)', target: 'L5p88(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).MAP2028c(Unannotated)
  data: { id: 'Rv2703(SigA).MAP2028c(Unannotated)', source: 'Rv2703(SigA)', target: 'MAP2028c(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).ML1795(Hsp18)
  data: { id: 'Rv2703(SigA).ML1795(Hsp18)', source: 'Rv2703(SigA)', target: 'ML1795(Hsp18)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).ML2041(OxyR)
  data: { id: 'Rv2703(SigA).ML2041(OxyR)', source: 'Rv2703(SigA)', target: 'ML2041(OxyR)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).ML2042(AhpC)
  data: { id: 'Rv2703(SigA).ML2042(AhpC)', source: 'Rv2703(SigA)', target: 'ML2042(AhpC)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).MLr01(Rrs)
  data: { id: 'Rv2703(SigA).MLr01(Rrs)', source: 'Rv2703(SigA)', target: 'MLr01(Rrs)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).MSMEG_0005(GyrB)
  data: { id: 'Rv2703(SigA).MSMEG_0005(GyrB)', source: 'Rv2703(SigA)', target: 'MSMEG_0005(GyrB)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).MSMEG_0014(Unannotated)
  data: { id: 'Rv2703(SigA).MSMEG_0014(Unannotated)', source: 'Rv2703(SigA)', target: 'MSMEG_0014(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).MSMEG_1398(RpsL)
  data: { id: 'Rv2703(SigA).MSMEG_1398(RpsL)', source: 'Rv2703(SigA)', target: 'MSMEG_1398(RpsL)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).MSMEG_1914(Unannotated)
  data: { id: 'Rv2703(SigA).MSMEG_1914(Unannotated)', source: 'Rv2703(SigA)', target: 'MSMEG_1914(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).MSMEG_2750(Unannotated)
  data: { id: 'Rv2703(SigA).MSMEG_2750(Unannotated)', source: 'Rv2703(SigA)', target: 'MSMEG_2750(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).MSMEG_2752(Unannotated)
  data: { id: 'Rv2703(SigA).MSMEG_2752(Unannotated)', source: 'Rv2703(SigA)', target: 'MSMEG_2752(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).MSMEG_2758(Unannotated)
  data: { id: 'Rv2703(SigA).MSMEG_2758(Unannotated)', source: 'Rv2703(SigA)', target: 'MSMEG_2758(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).MSMEG_3757(RrsA)
  data: { id: 'Rv2703(SigA).MSMEG_3757(RrsA)', source: 'Rv2703(SigA)', target: 'MSMEG_3757(RrsA)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).MSMEG_4931(RrsB)
  data: { id: 'Rv2703(SigA).MSMEG_4931(RrsB)', source: 'Rv2703(SigA)', target: 'MSMEG_4931(RrsB)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).MSMEG_5072(Extracyto_function_alt_sigma_factor)
  data: { id: 'Rv2703(SigA).MSMEG_5072(Extracyto_function_alt_sigma_factor)', source: 'Rv2703(SigA)', target: 'MSMEG_5072(Extracyto_function_alt_sigma_factor)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).MSMEG_6257(Unannotated)
  data: { id: 'Rv2703(SigA).MSMEG_6257(Unannotated)', source: 'Rv2703(SigA)', target: 'MSMEG_6257(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).rRNA(Rrs)
  data: { id: 'Rv2703(SigA).rRNA(Rrs)', source: 'Rv2703(SigA)', target: 'rRNA(Rrs)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv0006(GyrA)
  data: { id: 'Rv2703(SigA).Rv0006(GyrA)', source: 'Rv2703(SigA)', target: 'Rv0006(GyrA)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv0405(Pks6)
  data: { id: 'Rv2703(SigA).Rv0405(Pks6)', source: 'Rv2703(SigA)', target: 'Rv0405(Pks6)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv0430(Unannotated)
  data: { id: 'Rv2703(SigA).Rv0430(Unannotated)', source: 'Rv2703(SigA)', target: 'Rv0430(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv0534c(MenA)
  data: { id: 'Rv2703(SigA).Rv0534c(MenA)', source: 'Rv2703(SigA)', target: 'Rv0534c(MenA)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv0780(PurC)
  data: { id: 'Rv2703(SigA).Rv0780(PurC)', source: 'Rv2703(SigA)', target: 'Rv0780(PurC)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv0803(PurL)
  data: { id: 'Rv2703(SigA).Rv0803(PurL)', source: 'Rv2703(SigA)', target: 'Rv0803(PurL)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv1266c(PknH)
  data: { id: 'Rv2703(SigA).Rv1266c(PknH)', source: 'Rv2703(SigA)', target: 'Rv1266c(PknH)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv1303(Unannotated)
  data: { id: 'Rv2703(SigA).Rv1303(Unannotated)', source: 'Rv2703(SigA)', target: 'Rv1303(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv1394c(Cyp132)
  data: { id: 'Rv2703(SigA).Rv1394c(Cyp132)', source: 'Rv2703(SigA)', target: 'Rv1394c(Cyp132)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv1395(Unannotated)
  data: { id: 'Rv2703(SigA).Rv1395(Unannotated)', source: 'Rv2703(SigA)', target: 'Rv1395(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv1846c(Unannotated)
  data: { id: 'Rv2703(SigA).Rv1846c(Unannotated)', source: 'Rv2703(SigA)', target: 'Rv1846c(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv1847(Unannotated)
  data: { id: 'Rv2703(SigA).Rv1847(Unannotated)', source: 'Rv2703(SigA)', target: 'Rv1847(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv1876(BfrA)
  data: { id: 'Rv2703(SigA).Rv1876(BfrA)', source: 'Rv2703(SigA)', target: 'Rv1876(BfrA)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv1886c(FbpB)
  data: { id: 'Rv2703(SigA).Rv1886c(FbpB)', source: 'Rv2703(SigA)', target: 'Rv1886c(FbpB)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv1964(YrbE3A)
  data: { id: 'Rv2703(SigA).Rv1964(YrbE3A)', source: 'Rv2703(SigA)', target: 'Rv1964(YrbE3A)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv2031c(HspX)
  data: { id: 'Rv2703(SigA).Rv2031c(HspX)', source: 'Rv2703(SigA)', target: 'Rv2031c(HspX)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv2122c(HisE)
  data: { id: 'Rv2703(SigA).Rv2122c(HisE)', source: 'Rv2703(SigA)', target: 'Rv2122c(HisE)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv2150c(FtsZ)
  data: { id: 'Rv2703(SigA).Rv2150c(FtsZ)', source: 'Rv2703(SigA)', target: 'Rv2150c(FtsZ)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv2220(GlnA1)
  data: { id: 'Rv2703(SigA).Rv2220(GlnA1)', source: 'Rv2703(SigA)', target: 'Rv2220(GlnA1)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv2280(Unannotated)
  data: { id: 'Rv2703(SigA).Rv2280(Unannotated)', source: 'Rv2703(SigA)', target: 'Rv2280(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv2383c(MbtB)
  data: { id: 'Rv2703(SigA).Rv2383c(MbtB)', source: 'Rv2703(SigA)', target: 'Rv2383c(MbtB)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv2386c(MbtI)
  data: { id: 'Rv2703(SigA).Rv2386c(MbtI)', source: 'Rv2703(SigA)', target: 'Rv2386c(MbtI)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv2416c(Eis)
  data: { id: 'Rv2703(SigA).Rv2416c(Eis)', source: 'Rv2703(SigA)', target: 'Rv2416c(Eis)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv2589(GabT)
  data: { id: 'Rv2703(SigA).Rv2589(GabT)', source: 'Rv2703(SigA)', target: 'Rv2589(GabT)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv2703(SigA)
  data: { id: 'Rv2703(SigA).Rv2703(SigA)', source: 'Rv2703(SigA)', target: 'Rv2703(SigA)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv2710(SigB)
  data: { id: 'Rv2703(SigA).Rv2710(SigB)', source: 'Rv2703(SigA)', target: 'Rv2710(SigB)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv2719c(Unannotated)
  data: { id: 'Rv2703(SigA).Rv2719c(Unannotated)', source: 'Rv2703(SigA)', target: 'Rv2719c(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv2720(LexA)
  data: { id: 'Rv2703(SigA).Rv2720(LexA)', source: 'Rv2703(SigA)', target: 'Rv2720(LexA)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv2737c(RecA)
  data: { id: 'Rv2703(SigA).Rv2737c(RecA)', source: 'Rv2703(SigA)', target: 'Rv2737c(RecA)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv3082c(VirS)
  data: { id: 'Rv2703(SigA).Rv3082c(VirS)', source: 'Rv2703(SigA)', target: 'Rv3082c(VirS)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv3223c(SigH)
  data: { id: 'Rv2703(SigA).Rv3223c(SigH)', source: 'Rv2703(SigA)', target: 'Rv3223c(SigH)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv3246c(MtrA)
  data: { id: 'Rv2703(SigA).Rv3246c(MtrA)', source: 'Rv2703(SigA)', target: 'Rv3246c(MtrA)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv3402c(Unannotated)
  data: { id: 'Rv2703(SigA).Rv3402c(Unannotated)', source: 'Rv2703(SigA)', target: 'Rv3402c(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv3416(WhiB3)
  data: { id: 'Rv2703(SigA).Rv3416(WhiB3)', source: 'Rv2703(SigA)', target: 'Rv3416(WhiB3)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv3810(PirG)
  data: { id: 'Rv2703(SigA).Rv3810(PirG)', source: 'Rv2703(SigA)', target: 'Rv3810(PirG)' },
  classes: 'regulated-line'
},
	{// edge Rv2703(SigA).Rv3874(EsxB)
  data: { id: 'Rv2703(SigA).Rv3874(EsxB)', source: 'Rv2703(SigA)', target: 'Rv3874(EsxB)' },
  classes: 'regulated-line'
},
	{// edge Rv2710(SigB).BCG0248(PckA)
  data: { id: 'Rv2710(SigB).BCG0248(PckA)', source: 'Rv2710(SigB)', target: 'BCG0248(PckA)' },
  classes: 'regulated-line'
},
	{// edge Rv2710(SigB).BCG1138c(GreA)
  data: { id: 'Rv2710(SigB).BCG1138c(GreA)', source: 'Rv2710(SigB)', target: 'BCG1138c(GreA)' },
  classes: 'regulated-line'
},
	{// edge Rv2710(SigB).BCG2716(SigA)
  data: { id: 'Rv2710(SigB).BCG2716(SigA)', source: 'Rv2710(SigB)', target: 'BCG2716(SigA)' },
  classes: 'regulated-line'
},
	{// edge Rv2710(SigB).BCG3090(Mmr)
  data: { id: 'Rv2710(SigB).BCG3090(Mmr)', source: 'Rv2710(SigB)', target: 'BCG3090(Mmr)' },
  classes: 'regulated-line'
},
	{// edge Rv2710(SigB).rrs(16S_rRNA)
  data: { id: 'Rv2710(SigB).rrs(16S_rRNA)', source: 'Rv2710(SigB)', target: 'rrs(16S_rRNA)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv0142(Unannotated)
  data: { id: 'Rv3223c(SigH).Rv0142(Unannotated)', source: 'Rv3223c(SigH)', target: 'Rv0142(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv0251c(Hsp)
  data: { id: 'Rv3223c(SigH).Rv0251c(Hsp)', source: 'Rv3223c(SigH)', target: 'Rv0251c(Hsp)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv0350(DnaK)
  data: { id: 'Rv3223c(SigH).Rv0350(DnaK)', source: 'Rv3223c(SigH)', target: 'Rv0350(DnaK)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv0355c(PPE8)
  data: { id: 'Rv3223c(SigH).Rv0355c(PPE8)', source: 'Rv3223c(SigH)', target: 'Rv0355c(PPE8)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv0384c(ClpB)
  data: { id: 'Rv3223c(SigH).Rv0384c(ClpB)', source: 'Rv3223c(SigH)', target: 'Rv0384c(ClpB)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv0991c(Unannotated)
  data: { id: 'Rv3223c(SigH).Rv0991c(Unannotated)', source: 'Rv3223c(SigH)', target: 'Rv0991c(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv1221(SigE)
  data: { id: 'Rv3223c(SigH).Rv1221(SigE)', source: 'Rv3223c(SigH)', target: 'Rv1221(SigE)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv1334(Unannotated)
  data: { id: 'Rv3223c(SigH).Rv1334(Unannotated)', source: 'Rv3223c(SigH)', target: 'Rv1334(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv1471(TrxB1)
  data: { id: 'Rv3223c(SigH).Rv1471(TrxB1)', source: 'Rv3223c(SigH)', target: 'Rv1471(TrxB1)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv1528c(PapA4)
  data: { id: 'Rv3223c(SigH).Rv1528c(PapA4)', source: 'Rv3223c(SigH)', target: 'Rv1528c(PapA4)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv1645c(Unannotated)
  data: { id: 'Rv3223c(SigH).Rv1645c(Unannotated)', source: 'Rv3223c(SigH)', target: 'Rv1645c(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv2466c(Unannotated)
  data: { id: 'Rv3223c(SigH).Rv2466c(Unannotated)', source: 'Rv3223c(SigH)', target: 'Rv2466c(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv2699c(Unannotated)
  data: { id: 'Rv3223c(SigH).Rv2699c(Unannotated)', source: 'Rv3223c(SigH)', target: 'Rv2699c(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv2706c(Unannotated)
  data: { id: 'Rv3223c(SigH).Rv2706c(Unannotated)', source: 'Rv3223c(SigH)', target: 'Rv2706c(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv2710(SigB)
  data: { id: 'Rv3223c(SigH).Rv2710(SigB)', source: 'Rv3223c(SigH)', target: 'Rv2710(SigB)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv3054c(Unannotated)
  data: { id: 'Rv3223c(SigH).Rv3054c(Unannotated)', source: 'Rv3223c(SigH)', target: 'Rv3054c(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv3206c(MoeB1)
  data: { id: 'Rv3223c(SigH).Rv3206c(MoeB1)', source: 'Rv3223c(SigH)', target: 'Rv3206c(MoeB1)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv3223c(SigH)
  data: { id: 'Rv3223c(SigH).Rv3223c(SigH)', source: 'Rv3223c(SigH)', target: 'Rv3223c(SigH)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv3463(Unannotated)
  data: { id: 'Rv3223c(SigH).Rv3463(Unannotated)', source: 'Rv3223c(SigH)', target: 'Rv3463(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv3223c(SigH).Rv3913(TrxB2)
  data: { id: 'Rv3223c(SigH).Rv3913(TrxB2)', source: 'Rv3223c(SigH)', target: 'Rv3913(TrxB2)' },
  classes: 'regulated-line'
},
	{// edge Rv1221(SigE).Rv0251c(Hsp)
  data: { id: 'Rv1221(SigE).Rv0251c(Hsp)', source: 'Rv1221(SigE)', target: 'Rv0251c(Hsp)' },
  classes: 'regulated-line'
},
	{// edge Rv1221(SigE).Rv0467(Icl)
  data: { id: 'Rv1221(SigE).Rv0467(Icl)', source: 'Rv1221(SigE)', target: 'Rv0467(Icl)' },
  classes: 'regulated-line'
},
	{// edge Rv1221(SigE).Rv0468(FadB2)
  data: { id: 'Rv1221(SigE).Rv0468(FadB2)', source: 'Rv1221(SigE)', target: 'Rv0468(FadB2)' },
  classes: 'regulated-line'
},
	{// edge Rv1221(SigE).Rv0563(HtpX)
  data: { id: 'Rv1221(SigE).Rv0563(HtpX)', source: 'Rv1221(SigE)', target: 'Rv0563(HtpX)' },
  classes: 'regulated-line'
},
	{// edge Rv1221(SigE).Rv0981(MprA)
  data: { id: 'Rv1221(SigE).Rv0981(MprA)', source: 'Rv1221(SigE)', target: 'Rv0981(MprA)' },
  classes: 'regulated-line'
},
	{// edge Rv1221(SigE).Rv1057(Unannotated)
  data: { id: 'Rv1221(SigE).Rv1057(Unannotated)', source: 'Rv1221(SigE)', target: 'Rv1057(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv1221(SigE).Rv1130(Unannotated)
  data: { id: 'Rv1221(SigE).Rv1130(Unannotated)', source: 'Rv1221(SigE)', target: 'Rv1130(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv1221(SigE).Rv1329c(DinG)
  data: { id: 'Rv1221(SigE).Rv1329c(DinG)', source: 'Rv1221(SigE)', target: 'Rv1329c(DinG)' },
  classes: 'regulated-line'
},
	{// edge Rv1221(SigE).Rv2053c(Unannotated)
  data: { id: 'Rv1221(SigE).Rv2053c(Unannotated)', source: 'Rv1221(SigE)', target: 'Rv2053c(Unannotated)' },
  classes: 'regulated-line'
},
	{// edge Rv1221(SigE).Rv2710(SigB)
  data: { id: 'Rv1221(SigE).Rv2710(SigB)', source: 'Rv1221(SigE)', target: 'Rv2710(SigB)' },
  classes: 'regulated-line'
},
	{// edge Rv1221(SigE).Rv2745c(Unannotated)
  data: { id: 'Rv1221(SigE).Rv2745c(Unannotated)', source: 'Rv1221(SigE)', target: 'Rv2745c(Unannotated)' },
  classes: 'regulated-line'
},
{ // node Rv2703(SigA)
  data: { id: 'Rv2703(SigA)' },
  classes: 'regulator'
},
{ // edge Rv2703(SigA).Rv2703(SigA)
  data: { id: 'Rv2703(SigA).Rv2703(SigA)', source: 'Rv2703(SigA)', target: 'Rv2703(SigA)' },
  classes: 'regulator-line'
},
],

style: [
  {
    selector: 'node',
    style: {
      'background-color': '#935116',
      'label': 'data(id)'
    }
  },
  {
    selector: 'edge',
    style: {
      'width': 4,
      'line-color': '#212F3D',
      'target-arrow-color': '#212F3D',
      'target-arrow-shape': 'triangle'
    }
  },
  {
    selector: '.hide-labels',
    style: {
      'content': '',
    }
  },
  {
    selector: '.regulated-line',
    style: {
      'line-color': '#AEB6BF',
      'target-arrow-color': '#AEB6BF',
    }
  },
  {
    selector: '.regulator-line',
    style: {
      'line-color': '#AEB6BF',
      'target-arrow-color': '#AEB6BF',
      'line-style': 'dashed'
    }
  },
  {
    selector: '.regulated',
    style: {
      'background-color': '#FF5D56',
      'label': 'data(id)'
    }
  },
  {
    selector: '.regulator',
    style: {
      'background-color': '#FFBD35',
      'label': 'data(id)'
    }
  },
  {
    selector: '.selected',
    style: {
      'background-color': 'brown',
    }
  },
],

layout: {
	name: 'cose',
	// rows: 8
}
});

cy.panningEnabled(true);

cy.boxSelectionEnabled(true);

cy.autounselectify(true);

var ur = cy.undoRedo();


// Script to increase the size of every node in the graph proportional to the number of edges
var f = 25; // factor by which size should increase proportionally
cy.elements('node').forEach(function(ele) {
  // n is the number of edges connected to the current node
  var n = ele.neighbourhood('edge').length;
  n = Math.cbrt(n);
  // c is the neutralized factor n so that it could be used in GreenYellowRed function which ranges on
  // colors from range 0 to 100
  var c = n*20;
  ele.css({
    'height': n*f,
    'width': n*f, 
  });

});

// Program to show and hide labels of the nodes
cy.on('zoom', function() {
  if(cy.zoom() < 0.36) {
    cy.elements('node').addClass('hide-labels');
  } else {
    cy.elements('node').removeClass('hide-labels');
  }
});

var defaults = {
    container: ".cytoscape-navigator" // can be a HTML or jQuery element or jQuery selector
  , viewLiveFramerate: 0 // set false to update graph pan only on drag end; set 0 to do it instantly; set a number (frames per second) to update not more than N times per second
  , thumbnailEventFramerate: 30 // max thumbnail's updates per second triggered by graph updates
  , thumbnailLiveFramerate: false // max thumbnail's updates per second. Set false to disable
  , dblClickDelay: 200 // milliseconds
  , removeCustomContainer: false // destroy the container specified by user on plugin destroy
  , rerenderDelay: 100 // ms to throttle rerender updates to the panzoom for performance
};

var nav = cy.navigator( defaults ); // get navigator instance, nav

cy.panzoom({});

