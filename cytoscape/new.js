
var cont = document.getElementById('cy');

var cy = cytoscape({

container: cont, // container to render in

elements: [ // list of graph elements to start with
{ // node Rv2703(SigA)
  data: { id: 'Rv2703(SigA)' }
},
{ // node Rv0182c(SigG)
  data: { id: 'Rv0182c(SigG)' }
},
{ // node Rv0445c(SigK)
  data: { id: 'Rv0445c(SigK)' }
},
{ // node Rv0735(SigL)
  data: { id: 'Rv0735(SigL)' }
},
{ // node Rv1221(SigE)
  data: { id: 'Rv1221(SigE)' }
},
{ // node Rv2069(SigC)
  data: { id: 'Rv2069(SigC)' }
},
{ // node Rv2710(SigB)
  data: { id: 'Rv2710(SigB)' }
},
{ // node Rv3223c(SigH)
  data: { id: 'Rv3223c(SigH)' }
},
{ // node Rv3286c(SigF)
  data: { id: 'Rv3286c(SigF)' }
},
{ // node Rv3328c(SigJ)
  data: { id: 'Rv3328c(SigJ)' }
},
{ // node Rv3414c(SigD)
  data: { id: 'Rv3414c(SigD)' }
},
{ // node Rv3911(SigM)
  data: { id: 'Rv3911(SigM)' }
},
{ // node BCG0163c(FbpC)
  data: { id: 'BCG0163c(FbpC)' }
},
{ // node BCG0389(DnaK)
  data: { id: 'BCG0389(DnaK)' }
},
{ // node BCG0479(GroEL2)
  data: { id: 'BCG0479(GroEL2)' }
},
{ // node BCG1281(SigE)
  data: { id: 'BCG1281(SigE)' }
},
{ // node BCG1426c(Unannotated)
  data: { id: 'BCG1426c(Unannotated)' }
},
{ // node BCG1776c(NarK2)
  data: { id: 'BCG1776c(NarK2)' }
},
{ // node BCG1947c(KatG)
  data: { id: 'BCG1947c(KatG)' }
},
{ // node BCG1948c(FurA)
  data: { id: 'BCG1948c(FurA)' }
},
{ // node BCG2716(SigA)
  data: { id: 'BCG2716(SigA)' }
},
{ // node BCG2724(IdeR)
  data: { id: 'BCG2724(IdeR)' }
},
{ // node BCG2897(Mpb70)
  data: { id: 'BCG2897(Mpb70)' }
},
{ // node BCG2962c(Mas)
  data: { id: 'BCG2962c(Mas)' }
},
{ // node BCG3487c(GroEL1)
  data: { id: 'BCG3487c(GroEL1)' }
},
{ // node BCG3865c(FbpD)
  data: { id: 'BCG3865c(FbpD)' }
},
{ // node BCG3866c(FbpA)
  data: { id: 'BCG3866c(FbpA)' }
},
{ // node BCG3917c(EthA)
  data: { id: 'BCG3917c(EthA)' }
},
{ // node L5p71(Unannotated)
  data: { id: 'L5p71(Unannotated)' }
},
{ // node L5p88(Unannotated)
  data: { id: 'L5p88(Unannotated)' }
},
{ // node MAP2028c(Unannotated)
  data: { id: 'MAP2028c(Unannotated)' }
},
{ // node ML1795(Hsp18)
  data: { id: 'ML1795(Hsp18)' }
},
{ // node ML2041(OxyR)
  data: { id: 'ML2041(OxyR)' }
},
{ // node ML2042(AhpC)
  data: { id: 'ML2042(AhpC)' }
},
{ // node MLr01(Rrs)
  data: { id: 'MLr01(Rrs)' }
},
{ // node MSMEG_0005(GyrB)
  data: { id: 'MSMEG_0005(GyrB)' }
},
{ // node MSMEG_0014(Unannotated)
  data: { id: 'MSMEG_0014(Unannotated)' }
},
{ // node MSMEG_1398(RpsL)
  data: { id: 'MSMEG_1398(RpsL)' }
},
{ // node MSMEG_1914(Unannotated)
  data: { id: 'MSMEG_1914(Unannotated)' }
},
{ // node MSMEG_2750(Unannotated)
  data: { id: 'MSMEG_2750(Unannotated)' }
},
{ // node MSMEG_2752(Unannotated)
  data: { id: 'MSMEG_2752(Unannotated)' }
},
{ // node MSMEG_2758(Unannotated)
  data: { id: 'MSMEG_2758(Unannotated)' }
},
{ // node MSMEG_3757(RrsA)
  data: { id: 'MSMEG_3757(RrsA)' }
},
{ // node MSMEG_4931(RrsB)
  data: { id: 'MSMEG_4931(RrsB)' }
},
{ // node MSMEG_5072(Extracyto_function_alt_sigma_factor)
  data: { id: 'MSMEG_5072(Extracyto_function_alt_sigma_factor)' }
},
{ // node MSMEG_6257(Unannotated)
  data: { id: 'MSMEG_6257(Unannotated)' }
},
{ // node rRNA(Rrs)
  data: { id: 'rRNA(Rrs)' }
},
{ // node Rv0006(GyrA)
  data: { id: 'Rv0006(GyrA)' }
},
{ // node Rv0405(Pks6)
  data: { id: 'Rv0405(Pks6)' }
},
{ // node Rv0430(Unannotated)
  data: { id: 'Rv0430(Unannotated)' }
},
{ // node Rv0534c(MenA)
  data: { id: 'Rv0534c(MenA)' }
},
{ // node Rv0780(PurC)
  data: { id: 'Rv0780(PurC)' }
},
{ // node Rv0803(PurL)
  data: { id: 'Rv0803(PurL)' }
},
{ // node Rv1266c(PknH)
  data: { id: 'Rv1266c(PknH)' }
},
{ // node Rv1303(Unannotated)
  data: { id: 'Rv1303(Unannotated)' }
},
{ // node Rv1394c(Cyp132)
  data: { id: 'Rv1394c(Cyp132)' }
},
{ // node Rv1395(Unannotated)
  data: { id: 'Rv1395(Unannotated)' }
},
{ // node Rv1846c(Unannotated)
  data: { id: 'Rv1846c(Unannotated)' }
},
{ // node Rv1847(Unannotated)
  data: { id: 'Rv1847(Unannotated)' }
},
{ // node Rv1876(BfrA)
  data: { id: 'Rv1876(BfrA)' }
},
{ // node Rv1886c(FbpB)
  data: { id: 'Rv1886c(FbpB)' }
},
{ // node Rv1964(YrbE3A)
  data: { id: 'Rv1964(YrbE3A)' }
},
{ // node Rv2031c(HspX)
  data: { id: 'Rv2031c(HspX)' }
},
{ // node Rv2122c(HisE)
  data: { id: 'Rv2122c(HisE)' }
},
{ // node Rv2150c(FtsZ)
  data: { id: 'Rv2150c(FtsZ)' }
},
{ // node Rv2220(GlnA1)
  data: { id: 'Rv2220(GlnA1)' }
},
{ // node Rv2280(Unannotated)
  data: { id: 'Rv2280(Unannotated)' }
},
{ // node Rv2383c(MbtB)
  data: { id: 'Rv2383c(MbtB)' }
},
{ // node Rv2386c(MbtI)
  data: { id: 'Rv2386c(MbtI)' }
},
{ // node Rv2416c(Eis)
  data: { id: 'Rv2416c(Eis)' }
},
{ // node Rv2589(GabT)
  data: { id: 'Rv2589(GabT)' }
},
{ // node Rv2703(SigA)
  data: { id: 'Rv2703(SigA)' }
},
{ // node Rv2710(SigB)
  data: { id: 'Rv2710(SigB)' }
},
{ // node Rv2719c(Unannotated)
  data: { id: 'Rv2719c(Unannotated)' }
},
{ // node Rv2720(LexA)
  data: { id: 'Rv2720(LexA)' }
},
{ // node Rv2737c(RecA)
  data: { id: 'Rv2737c(RecA)' }
},
{ // node Rv3082c(VirS)
  data: { id: 'Rv3082c(VirS)' }
},
{ // node Rv3223c(SigH)
  data: { id: 'Rv3223c(SigH)' }
},
{ // node Rv3246c(MtrA)
  data: { id: 'Rv3246c(MtrA)' }
},
{ // node Rv3402c(Unannotated)
  data: { id: 'Rv3402c(Unannotated)' }
},
{ // node Rv3416(WhiB3)
  data: { id: 'Rv3416(WhiB3)' }
},
{ // node Rv3810(PirG)
  data: { id: 'Rv3810(PirG)' }
},
{ // node Rv3874(EsxB)
  data: { id: 'Rv3874(EsxB)' }
},
{ // node Rv0054(Ssb)
  data: { id: 'Rv0054(Ssb)' }
},
{ // node Rv0058(DnaB)
  data: { id: 'Rv0058(DnaB)' }
},
{ // node Rv0251c(Hsp)
  data: { id: 'Rv0251c(Hsp)' }
},
{ // node Rv0350(DnaK)
  data: { id: 'Rv0350(DnaK)' }
},
{ // node Rv0384c(ClpB)
  data: { id: 'Rv0384c(ClpB)' }
},
{ // node Rv0653c(Unannotated)
  data: { id: 'Rv0653c(Unannotated)' }
},
{ // node Rv0654(Unannotated)
  data: { id: 'Rv0654(Unannotated)' }
},
{ // node Rv0753c(MmsA)
  data: { id: 'Rv0753c(MmsA)' }
},
{ // node Rv0754(PE_PGRS11)
  data: { id: 'Rv0754(PE_PGRS11)' }
},
{ // node Rv0966c(Unannotated)
  data: { id: 'Rv0966c(Unannotated)' }
},
{ // node Rv1329c(DinG)
  data: { id: 'Rv1329c(DinG)' }
},
{ // node Rv1696(RecN)
  data: { id: 'Rv1696(RecN)' }
},
{ // node Rv1815(Unannotated)
  data: { id: 'Rv1815(Unannotated)' }
},
{ // node Rv1884c(RpfC)
  data: { id: 'Rv1884c(RpfC)' }
},
{ // node Rv2466c(Unannotated)
  data: { id: 'Rv2466c(Unannotated)' }
},
{ // node Rv2592c(RuvB)
  data: { id: 'Rv2592c(RuvB)' }
},
{ // node Rv2593c(RuvA)
  data: { id: 'Rv2593c(RuvA)' }
},
{ // node Rv2594c(RuvC)
  data: { id: 'Rv2594c(RuvC)' }
},
{ // node Rv3056(DinP)
  data: { id: 'Rv3056(DinP)' }
},
{ // node Rv3370c(DnaE2)
  data: { id: 'Rv3370c(DnaE2)' }
},
{ // node Rv3414c(SigD)
  data: { id: 'Rv3414c(SigD)' }
},
{ // node Rv3913(TrxB2)
  data: { id: 'Rv3913(TrxB2)' }
},
{ // node Mflv_4084(Unannotated)
  data: { id: 'Mflv_4084(Unannotated)' }
},
{ // node Mflv_1819(Unannotated)
  data: { id: 'Mflv_1819(Unannotated)' }
},
{ // node MMAR_1834(Mpt70)
  data: { id: 'MMAR_1834(Mpt70)' }
},
{ // node MUL_2084(DipZ)
  data: { id: 'MUL_2084(DipZ)' }
},
{ // node Mvan_2259(Unannotated)
  data: { id: 'Mvan_2259(Unannotated)' }
},
{ // node Mvan_4926(Unannotated)
  data: { id: 'Mvan_4926(Unannotated)' }
},
{ // node Rv0449c(Unannotated)
  data: { id: 'Rv0449c(Unannotated)' }
},
{ // node Rv2873(Mpt83)
  data: { id: 'Rv2873(Mpt83)' }
},
{ // node Rv2875(Mpt70)
  data: { id: 'Rv2875(Mpt70)' }
},
{ // node Rv0735(SigL)
  data: { id: 'Rv0735(SigL)' }
},
{ // node Rv1139c(Unannotated)
  data: { id: 'Rv1139c(Unannotated)' }
},
{ // node Rv1660(Pks10)
  data: { id: 'Rv1660(Pks10)' }
},
{ // node Rv2878c(Mpt53)
  data: { id: 'Rv2878c(Mpt53)' }
},
{ // node Rv0467(Icl)
  data: { id: 'Rv0467(Icl)' }
},
{ // node Rv0468(FadB2)
  data: { id: 'Rv0468(FadB2)' }
},
{ // node Rv0563(HtpX)
  data: { id: 'Rv0563(HtpX)' }
},
{ // node Rv0981(MprA)
  data: { id: 'Rv0981(MprA)' }
},
{ // node Rv1057(Unannotated)
  data: { id: 'Rv1057(Unannotated)' }
},
{ // node Rv1130(Unannotated)
  data: { id: 'Rv1130(Unannotated)' }
},
{ // node Rv2053c(Unannotated)
  data: { id: 'Rv2053c(Unannotated)' }
},
{ // node Rv2745c(Unannotated)
  data: { id: 'Rv2745c(Unannotated)' }
},
{ // node MT0117(Unannotated)
  data: { id: 'MT0117(Unannotated)' }
},
{ // node MT0152(Unannotated)
  data: { id: 'MT0152(Unannotated)' }
},
{ // node MT0241(Unannotated)
  data: { id: 'MT0241(Unannotated)' }
},
{ // node MT0300(Unannotated)
  data: { id: 'MT0300(Unannotated)' }
},
{ // node MT0671(Mma3)
  data: { id: 'MT0671(Mma3)' }
},
{ // node MT0978(SucC)
  data: { id: 'MT0978(SucC)' }
},
{ // node MT1629(Unannotated)
  data: { id: 'MT1629(Unannotated)' }
},
{ // node MT1772(GabD2)
  data: { id: 'MT1772(GabD2)' }
},
{ // node MT2090(Unannotated)
  data: { id: 'MT2090(Unannotated)' }
},
{ // node MT2977(RpsP)
  data: { id: 'MT2977(RpsP)' }
},
{ // node MT3144(Unannotated)
  data: { id: 'MT3144(Unannotated)' }
},
{ // node MT3150(Unannotated)
  data: { id: 'MT3150(Unannotated)' }
},
{ // node MT3153(PgmA)
  data: { id: 'MT3153(PgmA)' }
},
{ // node MT3367(Unannotated)
  data: { id: 'MT3367(Unannotated)' }
},
{ // node MT3417(SdhC)
  data: { id: 'MT3417(SdhC)' }
},
{ // node MT3568(InfA)
  data: { id: 'MT3568(InfA)' }
},
{ // node MT3587(Unannotated)
  data: { id: 'MT3587(Unannotated)' }
},
{ // node MT3690(Unannotated)
  data: { id: 'MT3690(Unannotated)' }
},
{ // node BCG0248(PckA)
  data: { id: 'BCG0248(PckA)' }
},
{ // node BCG1138c(GreA)
  data: { id: 'BCG1138c(GreA)' }
},
{ // node BCG3090(Mmr)
  data: { id: 'BCG3090(Mmr)' }
},
{ // node rrs(16S_rRNA)
  data: { id: 'rrs(16S_rRNA)' }
},
{ // node Rv0142(Unannotated)
  data: { id: 'Rv0142(Unannotated)' }
},
{ // node Rv0355c(PPE8)
  data: { id: 'Rv0355c(PPE8)' }
},
{ // node Rv0991c(Unannotated)
  data: { id: 'Rv0991c(Unannotated)' }
},
{ // node Rv1221(SigE)
  data: { id: 'Rv1221(SigE)' }
},
{ // node Rv1334(Unannotated)
  data: { id: 'Rv1334(Unannotated)' }
},
{ // node Rv1471(TrxB1)
  data: { id: 'Rv1471(TrxB1)' }
},
{ // node Rv1528c(PapA4)
  data: { id: 'Rv1528c(PapA4)' }
},
{ // node Rv1645c(Unannotated)
  data: { id: 'Rv1645c(Unannotated)' }
},
{ // node Rv2699c(Unannotated)
  data: { id: 'Rv2699c(Unannotated)' }
},
{ // node Rv2706c(Unannotated)
  data: { id: 'Rv2706c(Unannotated)' }
},
{ // node Rv3054c(Unannotated)
  data: { id: 'Rv3054c(Unannotated)' }
},
{ // node Rv3206c(MoeB1)
  data: { id: 'Rv3206c(MoeB1)' }
},
{ // node Rv3463(Unannotated)
  data: { id: 'Rv3463(Unannotated)' }
},
{ // node BCG3315c(SigF)
  data: { id: 'BCG3315c(SigF)' }
},
{ // node MT0011(Ppi-1)
  data: { id: 'MT0011(Ppi-1)' }
},
{ // node MT0014(Unannotated)
  data: { id: 'MT0014(Unannotated)' }
},
{ // node MT0015(Unannotated)
  data: { id: 'MT0015(Unannotated)' }
},
{ // node MT0026(Unannotated)
  data: { id: 'MT0026(Unannotated)' }
},
{ // node MT0215(Unannotated)
  data: { id: 'MT0215(Unannotated)' }
},
{ // node MT0343(Unannotated)
  data: { id: 'MT0343(Unannotated)' }
},
{ // node MT0376(Unannotated)
  data: { id: 'MT0376(Unannotated)' }
},
{ // node MT0445(Unannotated)
  data: { id: 'MT0445(Unannotated)' }
},
{ // node MT0537(Unannotated)
  data: { id: 'MT0537(Unannotated)' }
},
{ // node MT0762(Unannotated)
  data: { id: 'MT0762(Unannotated)' }
},
{ // node MT0917(Unannotated)
  data: { id: 'MT0917(Unannotated)' }
},
{ // node MT0990(Unannotated)
  data: { id: 'MT0990(Unannotated)' }
},
{ // node MT1124(PanK)
  data: { id: 'MT1124(PanK)' }
},
{ // node MT2178(Unannotated)
  data: { id: 'MT2178(Unannotated)' }
},
{ // node Rv3287c(RsbW)
  data: { id: 'Rv3287c(RsbW)' }
},
{ // node Rv1189(SigI)
  data: { id: 'Rv1189(SigI)' }
},
{ // node MSMEG_1599(RNA_pol_sigma-70_factor)
  data: { id: 'MSMEG_1599(RNA_pol_sigma-70_factor)' }
},
{ // node Rv0341(IniB)
  data: { id: 'Rv0341(IniB)' }
},
{ // node Rv0440(GroEL2)
  data: { id: 'Rv0440(GroEL2)' }
},
{ // node MT0040(Unannotated)
  data: { id: 'MT0040(Unannotated)' }
},
{ // node MT0327(Unannotated)
  data: { id: 'MT0327(Unannotated)' }
},
{ // node MT0497(Unannotated)
  data: { id: 'MT0497(Unannotated)' }
},
{ // node MT0680(RplJ)
  data: { id: 'MT0680(RplJ)' }
},
{ // node MT0713(Tuf)
  data: { id: 'MT0713(Tuf)' }
},
{ // node MT2973(Unannotated)
  data: { id: 'MT2973(Unannotated)' }
},
{ // node MT3067(Unannotated)
  data: { id: 'MT3067(Unannotated)' }
},
{ // node MT3176(Unannotated)
  data: { id: 'MT3176(Unannotated)' }
},
{ // node MT3177(Unannotated)
  data: { id: 'MT3177(Unannotated)' }
},
{ // node MT3179(Unannotated)
  data: { id: 'MT3179(Unannotated)' }
},
{ // node MT3544(Unannotated)
  data: { id: 'MT3544(Unannotated)' }
},
{ // node MT3545(Unannotated)
  data: { id: 'MT3545(Unannotated)' }
},
{ // node MT3549(Unannotated)
  data: { id: 'MT3549(Unannotated)' }
},
{ // node MT3550(Unannotated)
  data: { id: 'MT3550(Unannotated)' }
},
{ // node MT3553(Unannotated)
  data: { id: 'MT3553(Unannotated)' }
},
{ // node MT3554(Unannotated)
  data: { id: 'MT3554(Unannotated)' }
},
{ // node MT3555(Unannotated)
  data: { id: 'MT3555(Unannotated)' }
},
{ // node MT4023(Unannotated)
  data: { id: 'MT4023(Unannotated)' }
},
{ // node MT4024(Unannotated)
  data: { id: 'MT4024(Unannotated)' }
},
{ // node MT4025(Unannotated)
  data: { id: 'MT4025(Unannotated)' }
},
{ // node MT4026(PcnB)
  data: { id: 'MT4026(PcnB)' }
},
{ // node Rv2009(Unannotated)
  data: { id: 'Rv2009(Unannotated)' }
},
{ // node Rv3094c(Unannotated)
  data: { id: 'Rv3094c(Unannotated)' }
},
{// Rv2703(SigA).BCG0163c(FbpC)
  data: { id: 'Rv2703(SigA).BCG0163c(FbpC)', source: 'Rv2703(SigA)', target: 'BCG0163c(FbpC)' }
},
{// Rv2703(SigA).BCG0389(DnaK)
  data: { id: 'Rv2703(SigA).BCG0389(DnaK)', source: 'Rv2703(SigA)', target: 'BCG0389(DnaK)' }
},
{// Rv2703(SigA).BCG0389(DnaK)
  data: { id: 'Rv2703(SigA).BCG0389(DnaK)', source: 'Rv2703(SigA)', target: 'BCG0389(DnaK)' }
},
{// Rv2703(SigA).BCG0479(GroEL2)
  data: { id: 'Rv2703(SigA).BCG0479(GroEL2)', source: 'Rv2703(SigA)', target: 'BCG0479(GroEL2)' }
},
{// Rv2703(SigA).BCG0479(GroEL2)
  data: { id: 'Rv2703(SigA).BCG0479(GroEL2)', source: 'Rv2703(SigA)', target: 'BCG0479(GroEL2)' }
},
{// Rv2703(SigA).BCG1281(SigE)
  data: { id: 'Rv2703(SigA).BCG1281(SigE)', source: 'Rv2703(SigA)', target: 'BCG1281(SigE)' }
},
{// Rv2703(SigA).BCG1281(SigE)
  data: { id: 'Rv2703(SigA).BCG1281(SigE)', source: 'Rv2703(SigA)', target: 'BCG1281(SigE)' }
},
{// Rv2703(SigA).BCG1426c(Unannotated)
  data: { id: 'Rv2703(SigA).BCG1426c(Unannotated)', source: 'Rv2703(SigA)', target: 'BCG1426c(Unannotated)' }
},
{// Rv2703(SigA).BCG1426c(Unannotated)
  data: { id: 'Rv2703(SigA).BCG1426c(Unannotated)', source: 'Rv2703(SigA)', target: 'BCG1426c(Unannotated)' }
},
{// Rv2703(SigA).BCG1776c(NarK2)
  data: { id: 'Rv2703(SigA).BCG1776c(NarK2)', source: 'Rv2703(SigA)', target: 'BCG1776c(NarK2)' }
},
{// Rv2703(SigA).BCG1947c(KatG)
  data: { id: 'Rv2703(SigA).BCG1947c(KatG)', source: 'Rv2703(SigA)', target: 'BCG1947c(KatG)' }
},
{// Rv2703(SigA).BCG1948c(FurA)
  data: { id: 'Rv2703(SigA).BCG1948c(FurA)', source: 'Rv2703(SigA)', target: 'BCG1948c(FurA)' }
},
{// Rv2703(SigA).BCG2716(SigA)
  data: { id: 'Rv2703(SigA).BCG2716(SigA)', source: 'Rv2703(SigA)', target: 'BCG2716(SigA)' }
},
{// Rv2703(SigA).BCG2724(IdeR)
  data: { id: 'Rv2703(SigA).BCG2724(IdeR)', source: 'Rv2703(SigA)', target: 'BCG2724(IdeR)' }
},
{// Rv2703(SigA).BCG2897(Mpb70)
  data: { id: 'Rv2703(SigA).BCG2897(Mpb70)', source: 'Rv2703(SigA)', target: 'BCG2897(Mpb70)' }
},
{// Rv2703(SigA).BCG2897(Mpb70)
  data: { id: 'Rv2703(SigA).BCG2897(Mpb70)', source: 'Rv2703(SigA)', target: 'BCG2897(Mpb70)' }
},
{// Rv2703(SigA).BCG2962c(Mas)
  data: { id: 'Rv2703(SigA).BCG2962c(Mas)', source: 'Rv2703(SigA)', target: 'BCG2962c(Mas)' }
},
{// Rv2703(SigA).BCG3487c(GroEL1)
  data: { id: 'Rv2703(SigA).BCG3487c(GroEL1)', source: 'Rv2703(SigA)', target: 'BCG3487c(GroEL1)' }
},
{// Rv2703(SigA).BCG3865c(FbpD)
  data: { id: 'Rv2703(SigA).BCG3865c(FbpD)', source: 'Rv2703(SigA)', target: 'BCG3865c(FbpD)' }
},
{// Rv2703(SigA).BCG3866c(FbpA)
  data: { id: 'Rv2703(SigA).BCG3866c(FbpA)', source: 'Rv2703(SigA)', target: 'BCG3866c(FbpA)' }
},
{// Rv2703(SigA).BCG3917c(EthA)
  data: { id: 'Rv2703(SigA).BCG3917c(EthA)', source: 'Rv2703(SigA)', target: 'BCG3917c(EthA)' }
},
{// Rv2703(SigA).L5p71(Unannotated)
  data: { id: 'Rv2703(SigA).L5p71(Unannotated)', source: 'Rv2703(SigA)', target: 'L5p71(Unannotated)' }
},
{// Rv2703(SigA).L5p71(Unannotated)
  data: { id: 'Rv2703(SigA).L5p71(Unannotated)', source: 'Rv2703(SigA)', target: 'L5p71(Unannotated)' }
},
{// Rv2703(SigA).L5p71(Unannotated)
  data: { id: 'Rv2703(SigA).L5p71(Unannotated)', source: 'Rv2703(SigA)', target: 'L5p71(Unannotated)' }
},
{// Rv2703(SigA).L5p88(Unannotated)
  data: { id: 'Rv2703(SigA).L5p88(Unannotated)', source: 'Rv2703(SigA)', target: 'L5p88(Unannotated)' }
},
{// Rv2703(SigA).MAP2028c(Unannotated)
  data: { id: 'Rv2703(SigA).MAP2028c(Unannotated)', source: 'Rv2703(SigA)', target: 'MAP2028c(Unannotated)' }
},
{// Rv2703(SigA).ML1795(Hsp18)
  data: { id: 'Rv2703(SigA).ML1795(Hsp18)', source: 'Rv2703(SigA)', target: 'ML1795(Hsp18)' }
},
{// Rv2703(SigA).ML2041(OxyR)
  data: { id: 'Rv2703(SigA).ML2041(OxyR)', source: 'Rv2703(SigA)', target: 'ML2041(OxyR)' }
},
{// Rv2703(SigA).ML2041(OxyR)
  data: { id: 'Rv2703(SigA).ML2041(OxyR)', source: 'Rv2703(SigA)', target: 'ML2041(OxyR)' }
},
{// Rv2703(SigA).ML2042(AhpC)
  data: { id: 'Rv2703(SigA).ML2042(AhpC)', source: 'Rv2703(SigA)', target: 'ML2042(AhpC)' }
},
{// Rv2703(SigA).ML2042(AhpC)
  data: { id: 'Rv2703(SigA).ML2042(AhpC)', source: 'Rv2703(SigA)', target: 'ML2042(AhpC)' }
},
{// Rv2703(SigA).MLr01(Rrs)
  data: { id: 'Rv2703(SigA).MLr01(Rrs)', source: 'Rv2703(SigA)', target: 'MLr01(Rrs)' }
},
{// Rv2703(SigA).MSMEG_0005(GyrB)
  data: { id: 'Rv2703(SigA).MSMEG_0005(GyrB)', source: 'Rv2703(SigA)', target: 'MSMEG_0005(GyrB)' }
},
{// Rv2703(SigA).MSMEG_0014(Unannotated)
  data: { id: 'Rv2703(SigA).MSMEG_0014(Unannotated)', source: 'Rv2703(SigA)', target: 'MSMEG_0014(Unannotated)' }
},
{// Rv2703(SigA).MSMEG_1398(RpsL)
  data: { id: 'Rv2703(SigA).MSMEG_1398(RpsL)', source: 'Rv2703(SigA)', target: 'MSMEG_1398(RpsL)' }
},
{// Rv2703(SigA).MSMEG_1914(Unannotated)
  data: { id: 'Rv2703(SigA).MSMEG_1914(Unannotated)', source: 'Rv2703(SigA)', target: 'MSMEG_1914(Unannotated)' }
},
{// Rv2703(SigA).MSMEG_2750(Unannotated)
  data: { id: 'Rv2703(SigA).MSMEG_2750(Unannotated)', source: 'Rv2703(SigA)', target: 'MSMEG_2750(Unannotated)' }
},
{// Rv2703(SigA).MSMEG_2752(Unannotated)
  data: { id: 'Rv2703(SigA).MSMEG_2752(Unannotated)', source: 'Rv2703(SigA)', target: 'MSMEG_2752(Unannotated)' }
},
{// Rv2703(SigA).MSMEG_2758(Unannotated)
  data: { id: 'Rv2703(SigA).MSMEG_2758(Unannotated)', source: 'Rv2703(SigA)', target: 'MSMEG_2758(Unannotated)' }
},
{// Rv2703(SigA).MSMEG_3757(RrsA)
  data: { id: 'Rv2703(SigA).MSMEG_3757(RrsA)', source: 'Rv2703(SigA)', target: 'MSMEG_3757(RrsA)' }
},
{// Rv2703(SigA).MSMEG_4931(RrsB)
  data: { id: 'Rv2703(SigA).MSMEG_4931(RrsB)', source: 'Rv2703(SigA)', target: 'MSMEG_4931(RrsB)' }
},
{// Rv2703(SigA).MSMEG_4931(RrsB)
  data: { id: 'Rv2703(SigA).MSMEG_4931(RrsB)', source: 'Rv2703(SigA)', target: 'MSMEG_4931(RrsB)' }
},
{// Rv2703(SigA).MSMEG_4931(RrsB)
  data: { id: 'Rv2703(SigA).MSMEG_4931(RrsB)', source: 'Rv2703(SigA)', target: 'MSMEG_4931(RrsB)' }
},
{// Rv2703(SigA).MSMEG_5072(Extracyto_function_alt_sigma_factor)
  data: { id: 'Rv2703(SigA).MSMEG_5072(Extracyto_function_alt_sigma_factor)', source: 'Rv2703(SigA)', target: 'MSMEG_5072(Extracyto_function_alt_sigma_factor)' }
},
{// Rv2703(SigA).MSMEG_5072(Extracyto_function_alt_sigma_factor)
  data: { id: 'Rv2703(SigA).MSMEG_5072(Extracyto_function_alt_sigma_factor)', source: 'Rv2703(SigA)', target: 'MSMEG_5072(Extracyto_function_alt_sigma_factor)' }
},
{// Rv2703(SigA).MSMEG_6257(Unannotated)
  data: { id: 'Rv2703(SigA).MSMEG_6257(Unannotated)', source: 'Rv2703(SigA)', target: 'MSMEG_6257(Unannotated)' }
},
{// Rv2703(SigA).rRNA(Rrs)
  data: { id: 'Rv2703(SigA).rRNA(Rrs)', source: 'Rv2703(SigA)', target: 'rRNA(Rrs)' }
},
{// Rv2703(SigA).rRNA(Rrs)
  data: { id: 'Rv2703(SigA).rRNA(Rrs)', source: 'Rv2703(SigA)', target: 'rRNA(Rrs)' }
},
{// Rv2703(SigA).rRNA(Rrs)
  data: { id: 'Rv2703(SigA).rRNA(Rrs)', source: 'Rv2703(SigA)', target: 'rRNA(Rrs)' }
},
{// Rv2703(SigA).Rv0006(GyrA)
  data: { id: 'Rv2703(SigA).Rv0006(GyrA)', source: 'Rv2703(SigA)', target: 'Rv0006(GyrA)' }
},
{// Rv2703(SigA).Rv0405(Pks6)
  data: { id: 'Rv2703(SigA).Rv0405(Pks6)', source: 'Rv2703(SigA)', target: 'Rv0405(Pks6)' }
},
{// Rv2703(SigA).Rv0430(Unannotated)
  data: { id: 'Rv2703(SigA).Rv0430(Unannotated)', source: 'Rv2703(SigA)', target: 'Rv0430(Unannotated)' }
},
{// Rv2703(SigA).Rv0534c(MenA)
  data: { id: 'Rv2703(SigA).Rv0534c(MenA)', source: 'Rv2703(SigA)', target: 'Rv0534c(MenA)' }
},
{// Rv2703(SigA).Rv0780(PurC)
  data: { id: 'Rv2703(SigA).Rv0780(PurC)', source: 'Rv2703(SigA)', target: 'Rv0780(PurC)' }
},
{// Rv2703(SigA).Rv0803(PurL)
  data: { id: 'Rv2703(SigA).Rv0803(PurL)', source: 'Rv2703(SigA)', target: 'Rv0803(PurL)' }
},
{// Rv2703(SigA).Rv1266c(PknH)
  data: { id: 'Rv2703(SigA).Rv1266c(PknH)', source: 'Rv2703(SigA)', target: 'Rv1266c(PknH)' }
},
{// Rv2703(SigA).Rv1303(Unannotated)
  data: { id: 'Rv2703(SigA).Rv1303(Unannotated)', source: 'Rv2703(SigA)', target: 'Rv1303(Unannotated)' }
},
{// Rv2703(SigA).Rv1394c(Cyp132)
  data: { id: 'Rv2703(SigA).Rv1394c(Cyp132)', source: 'Rv2703(SigA)', target: 'Rv1394c(Cyp132)' }
},
{// Rv2703(SigA).Rv1394c(Cyp132)
  data: { id: 'Rv2703(SigA).Rv1394c(Cyp132)', source: 'Rv2703(SigA)', target: 'Rv1394c(Cyp132)' }
},
{// Rv2703(SigA).Rv1395(Unannotated)
  data: { id: 'Rv2703(SigA).Rv1395(Unannotated)', source: 'Rv2703(SigA)', target: 'Rv1395(Unannotated)' }
},
{// Rv2703(SigA).Rv1395(Unannotated)
  data: { id: 'Rv2703(SigA).Rv1395(Unannotated)', source: 'Rv2703(SigA)', target: 'Rv1395(Unannotated)' }
},
{// Rv2703(SigA).Rv1846c(Unannotated)
  data: { id: 'Rv2703(SigA).Rv1846c(Unannotated)', source: 'Rv2703(SigA)', target: 'Rv1846c(Unannotated)' }
},
{// Rv2703(SigA).Rv1847(Unannotated)
  data: { id: 'Rv2703(SigA).Rv1847(Unannotated)', source: 'Rv2703(SigA)', target: 'Rv1847(Unannotated)' }
},
{// Rv2703(SigA).Rv1876(BfrA)
  data: { id: 'Rv2703(SigA).Rv1876(BfrA)', source: 'Rv2703(SigA)', target: 'Rv1876(BfrA)' }
},
{// Rv2703(SigA).Rv1876(BfrA)
  data: { id: 'Rv2703(SigA).Rv1876(BfrA)', source: 'Rv2703(SigA)', target: 'Rv1876(BfrA)' }
},
{// Rv2703(SigA).Rv1876(BfrA)
  data: { id: 'Rv2703(SigA).Rv1876(BfrA)', source: 'Rv2703(SigA)', target: 'Rv1876(BfrA)' }
},
{// Rv2703(SigA).Rv1886c(FbpB)
  data: { id: 'Rv2703(SigA).Rv1886c(FbpB)', source: 'Rv2703(SigA)', target: 'Rv1886c(FbpB)' }
},
{// Rv2703(SigA).Rv1964(YrbE3A)
  data: { id: 'Rv2703(SigA).Rv1964(YrbE3A)', source: 'Rv2703(SigA)', target: 'Rv1964(YrbE3A)' }
},
{// Rv2703(SigA).Rv2031c(HspX)
  data: { id: 'Rv2703(SigA).Rv2031c(HspX)', source: 'Rv2703(SigA)', target: 'Rv2031c(HspX)' }
},
{// Rv2703(SigA).Rv2122c(HisE)
  data: { id: 'Rv2703(SigA).Rv2122c(HisE)', source: 'Rv2703(SigA)', target: 'Rv2122c(HisE)' }
},
{// Rv2703(SigA).Rv2150c(FtsZ)
  data: { id: 'Rv2703(SigA).Rv2150c(FtsZ)', source: 'Rv2703(SigA)', target: 'Rv2150c(FtsZ)' }
},
{// Rv2703(SigA).Rv2150c(FtsZ)
  data: { id: 'Rv2703(SigA).Rv2150c(FtsZ)', source: 'Rv2703(SigA)', target: 'Rv2150c(FtsZ)' }
},
{// Rv2703(SigA).Rv2150c(FtsZ)
  data: { id: 'Rv2703(SigA).Rv2150c(FtsZ)', source: 'Rv2703(SigA)', target: 'Rv2150c(FtsZ)' }
},
{// Rv2703(SigA).Rv2150c(FtsZ)
  data: { id: 'Rv2703(SigA).Rv2150c(FtsZ)', source: 'Rv2703(SigA)', target: 'Rv2150c(FtsZ)' }
},
{// Rv2703(SigA).Rv2150c(FtsZ)
  data: { id: 'Rv2703(SigA).Rv2150c(FtsZ)', source: 'Rv2703(SigA)', target: 'Rv2150c(FtsZ)' }
},
{// Rv2703(SigA).Rv2150c(FtsZ)
  data: { id: 'Rv2703(SigA).Rv2150c(FtsZ)', source: 'Rv2703(SigA)', target: 'Rv2150c(FtsZ)' }
},
{// Rv2703(SigA).Rv2220(GlnA1)
  data: { id: 'Rv2703(SigA).Rv2220(GlnA1)', source: 'Rv2703(SigA)', target: 'Rv2220(GlnA1)' }
},
{// Rv2703(SigA).Rv2220(GlnA1)
  data: { id: 'Rv2703(SigA).Rv2220(GlnA1)', source: 'Rv2703(SigA)', target: 'Rv2220(GlnA1)' }
},
{// Rv2703(SigA).Rv2280(Unannotated)
  data: { id: 'Rv2703(SigA).Rv2280(Unannotated)', source: 'Rv2703(SigA)', target: 'Rv2280(Unannotated)' }
},
{// Rv2703(SigA).Rv2383c(MbtB)
  data: { id: 'Rv2703(SigA).Rv2383c(MbtB)', source: 'Rv2703(SigA)', target: 'Rv2383c(MbtB)' }
},
{// Rv2703(SigA).Rv2386c(MbtI)
  data: { id: 'Rv2703(SigA).Rv2386c(MbtI)', source: 'Rv2703(SigA)', target: 'Rv2386c(MbtI)' }
},
{// Rv2703(SigA).Rv2416c(Eis)
  data: { id: 'Rv2703(SigA).Rv2416c(Eis)', source: 'Rv2703(SigA)', target: 'Rv2416c(Eis)' }
},
{// Rv2703(SigA).Rv2589(GabT)
  data: { id: 'Rv2703(SigA).Rv2589(GabT)', source: 'Rv2703(SigA)', target: 'Rv2589(GabT)' }
},
{// Rv2703(SigA).Rv2703(SigA)
  data: { id: 'Rv2703(SigA).Rv2703(SigA)', source: 'Rv2703(SigA)', target: 'Rv2703(SigA)' }
},
{// Rv2703(SigA).Rv2710(SigB)
  data: { id: 'Rv2703(SigA).Rv2710(SigB)', source: 'Rv2703(SigA)', target: 'Rv2710(SigB)' }
},
{// Rv2703(SigA).Rv2719c(Unannotated)
  data: { id: 'Rv2703(SigA).Rv2719c(Unannotated)', source: 'Rv2703(SigA)', target: 'Rv2719c(Unannotated)' }
},
{// Rv2703(SigA).Rv2719c(Unannotated)
  data: { id: 'Rv2703(SigA).Rv2719c(Unannotated)', source: 'Rv2703(SigA)', target: 'Rv2719c(Unannotated)' }
},
{// Rv2703(SigA).Rv2720(LexA)
  data: { id: 'Rv2703(SigA).Rv2720(LexA)', source: 'Rv2703(SigA)', target: 'Rv2720(LexA)' }
},
{// Rv2703(SigA).Rv2737c(RecA)
  data: { id: 'Rv2703(SigA).Rv2737c(RecA)', source: 'Rv2703(SigA)', target: 'Rv2737c(RecA)' }
},
{// Rv2703(SigA).Rv2737c(RecA)
  data: { id: 'Rv2703(SigA).Rv2737c(RecA)', source: 'Rv2703(SigA)', target: 'Rv2737c(RecA)' }
},
{// Rv2703(SigA).Rv3082c(VirS)
  data: { id: 'Rv2703(SigA).Rv3082c(VirS)', source: 'Rv2703(SigA)', target: 'Rv3082c(VirS)' }
},
{// Rv2703(SigA).Rv3223c(SigH)
  data: { id: 'Rv2703(SigA).Rv3223c(SigH)', source: 'Rv2703(SigA)', target: 'Rv3223c(SigH)' }
},
{// Rv2703(SigA).Rv3246c(MtrA)
  data: { id: 'Rv2703(SigA).Rv3246c(MtrA)', source: 'Rv2703(SigA)', target: 'Rv3246c(MtrA)' }
},
{// Rv2703(SigA).Rv3402c(Unannotated)
  data: { id: 'Rv2703(SigA).Rv3402c(Unannotated)', source: 'Rv2703(SigA)', target: 'Rv3402c(Unannotated)' }
},
{// Rv2703(SigA).Rv3416(WhiB3)
  data: { id: 'Rv2703(SigA).Rv3416(WhiB3)', source: 'Rv2703(SigA)', target: 'Rv3416(WhiB3)' }
},
{// Rv2703(SigA).Rv3416(WhiB3)
  data: { id: 'Rv2703(SigA).Rv3416(WhiB3)', source: 'Rv2703(SigA)', target: 'Rv3416(WhiB3)' }
},
{// Rv2703(SigA).Rv3416(WhiB3)
  data: { id: 'Rv2703(SigA).Rv3416(WhiB3)', source: 'Rv2703(SigA)', target: 'Rv3416(WhiB3)' }
},
{// Rv2703(SigA).Rv3810(PirG)
  data: { id: 'Rv2703(SigA).Rv3810(PirG)', source: 'Rv2703(SigA)', target: 'Rv3810(PirG)' }
},
{// Rv2703(SigA).Rv3874(EsxB)
  data: { id: 'Rv2703(SigA).Rv3874(EsxB)', source: 'Rv2703(SigA)', target: 'Rv3874(EsxB)' }
},
{// Rv2703(SigA).Rv3874(EsxB)
  data: { id: 'Rv2703(SigA).Rv3874(EsxB)', source: 'Rv2703(SigA)', target: 'Rv3874(EsxB)' }
},
{// Rv2703(SigA).Rv3874(EsxB)
  data: { id: 'Rv2703(SigA).Rv3874(EsxB)', source: 'Rv2703(SigA)', target: 'Rv3874(EsxB)' }
},
{// Rv2703(SigA).Rv3874(EsxB)
  data: { id: 'Rv2703(SigA).Rv3874(EsxB)', source: 'Rv2703(SigA)', target: 'Rv3874(EsxB)' }
},
{// Rv0182c(SigG).Rv0054(Ssb)
  data: { id: 'Rv0182c(SigG).Rv0054(Ssb)', source: 'Rv0182c(SigG)', target: 'Rv0054(Ssb)' }
},
{// Rv0182c(SigG).Rv0058(DnaB)
  data: { id: 'Rv0182c(SigG).Rv0058(DnaB)', source: 'Rv0182c(SigG)', target: 'Rv0058(DnaB)' }
},
{// Rv0182c(SigG).Rv0251c(Hsp)
  data: { id: 'Rv0182c(SigG).Rv0251c(Hsp)', source: 'Rv0182c(SigG)', target: 'Rv0251c(Hsp)' }
},
{// Rv0182c(SigG).Rv0350(DnaK)
  data: { id: 'Rv0182c(SigG).Rv0350(DnaK)', source: 'Rv0182c(SigG)', target: 'Rv0350(DnaK)' }
},
{// Rv0182c(SigG).Rv0384c(ClpB)
  data: { id: 'Rv0182c(SigG).Rv0384c(ClpB)', source: 'Rv0182c(SigG)', target: 'Rv0384c(ClpB)' }
},
{// Rv0182c(SigG).Rv0653c(Unannotated)
  data: { id: 'Rv0182c(SigG).Rv0653c(Unannotated)', source: 'Rv0182c(SigG)', target: 'Rv0653c(Unannotated)' }
},
{// Rv0182c(SigG).Rv0654(Unannotated)
  data: { id: 'Rv0182c(SigG).Rv0654(Unannotated)', source: 'Rv0182c(SigG)', target: 'Rv0654(Unannotated)' }
},
{// Rv0182c(SigG).Rv0753c(MmsA)
  data: { id: 'Rv0182c(SigG).Rv0753c(MmsA)', source: 'Rv0182c(SigG)', target: 'Rv0753c(MmsA)' }
},
{// Rv0182c(SigG).Rv0754(PE_PGRS11)
  data: { id: 'Rv0182c(SigG).Rv0754(PE_PGRS11)', source: 'Rv0182c(SigG)', target: 'Rv0754(PE_PGRS11)' }
},
{// Rv0182c(SigG).Rv0966c(Unannotated)
  data: { id: 'Rv0182c(SigG).Rv0966c(Unannotated)', source: 'Rv0182c(SigG)', target: 'Rv0966c(Unannotated)' }
},
{// Rv0182c(SigG).Rv1329c(DinG)
  data: { id: 'Rv0182c(SigG).Rv1329c(DinG)', source: 'Rv0182c(SigG)', target: 'Rv1329c(DinG)' }
},
{// Rv0182c(SigG).Rv1696(RecN)
  data: { id: 'Rv0182c(SigG).Rv1696(RecN)', source: 'Rv0182c(SigG)', target: 'Rv1696(RecN)' }
},
{// Rv0182c(SigG).Rv1815(Unannotated)
  data: { id: 'Rv0182c(SigG).Rv1815(Unannotated)', source: 'Rv0182c(SigG)', target: 'Rv1815(Unannotated)' }
},
{// Rv0182c(SigG).Rv1884c(RpfC)
  data: { id: 'Rv0182c(SigG).Rv1884c(RpfC)', source: 'Rv0182c(SigG)', target: 'Rv1884c(RpfC)' }
},
{// Rv0182c(SigG).Rv2466c(Unannotated)
  data: { id: 'Rv0182c(SigG).Rv2466c(Unannotated)', source: 'Rv0182c(SigG)', target: 'Rv2466c(Unannotated)' }
},
{// Rv0182c(SigG).Rv2592c(RuvB)
  data: { id: 'Rv0182c(SigG).Rv2592c(RuvB)', source: 'Rv0182c(SigG)', target: 'Rv2592c(RuvB)' }
},
{// Rv0182c(SigG).Rv2593c(RuvA)
  data: { id: 'Rv0182c(SigG).Rv2593c(RuvA)', source: 'Rv0182c(SigG)', target: 'Rv2593c(RuvA)' }
},
{// Rv0182c(SigG).Rv2594c(RuvC)
  data: { id: 'Rv0182c(SigG).Rv2594c(RuvC)', source: 'Rv0182c(SigG)', target: 'Rv2594c(RuvC)' }
},
{// Rv0182c(SigG).Rv2720(LexA)
  data: { id: 'Rv0182c(SigG).Rv2720(LexA)', source: 'Rv0182c(SigG)', target: 'Rv2720(LexA)' }
},
{// Rv0182c(SigG).Rv2737c(RecA)
  data: { id: 'Rv0182c(SigG).Rv2737c(RecA)', source: 'Rv0182c(SigG)', target: 'Rv2737c(RecA)' }
},
{// Rv0182c(SigG).Rv3056(DinP)
  data: { id: 'Rv0182c(SigG).Rv3056(DinP)', source: 'Rv0182c(SigG)', target: 'Rv3056(DinP)' }
},
{// Rv0182c(SigG).Rv3223c(SigH)
  data: { id: 'Rv0182c(SigG).Rv3223c(SigH)', source: 'Rv0182c(SigG)', target: 'Rv3223c(SigH)' }
},
{// Rv0182c(SigG).Rv3370c(DnaE2)
  data: { id: 'Rv0182c(SigG).Rv3370c(DnaE2)', source: 'Rv0182c(SigG)', target: 'Rv3370c(DnaE2)' }
},
{// Rv0182c(SigG).Rv3414c(SigD)
  data: { id: 'Rv0182c(SigG).Rv3414c(SigD)', source: 'Rv0182c(SigG)', target: 'Rv3414c(SigD)' }
},
{// Rv0182c(SigG).Rv3913(TrxB2)
  data: { id: 'Rv0182c(SigG).Rv3913(TrxB2)', source: 'Rv0182c(SigG)', target: 'Rv3913(TrxB2)' }
},
{// Rv0445c(SigK).Mflv_4084(Unannotated)
  data: { id: 'Rv0445c(SigK).Mflv_4084(Unannotated)', source: 'Rv0445c(SigK)', target: 'Mflv_4084(Unannotated)' }
},
{// Rv0445c(SigK).Mflv_1819(Unannotated)
  data: { id: 'Rv0445c(SigK).Mflv_1819(Unannotated)', source: 'Rv0445c(SigK)', target: 'Mflv_1819(Unannotated)' }
},
{// Rv0445c(SigK).MMAR_1834(Mpt70)
  data: { id: 'Rv0445c(SigK).MMAR_1834(Mpt70)', source: 'Rv0445c(SigK)', target: 'MMAR_1834(Mpt70)' }
},
{// Rv0445c(SigK).MUL_2084(DipZ)
  data: { id: 'Rv0445c(SigK).MUL_2084(DipZ)', source: 'Rv0445c(SigK)', target: 'MUL_2084(DipZ)' }
},
{// Rv0445c(SigK).Mvan_2259(Unannotated)
  data: { id: 'Rv0445c(SigK).Mvan_2259(Unannotated)', source: 'Rv0445c(SigK)', target: 'Mvan_2259(Unannotated)' }
},
{// Rv0445c(SigK).Mvan_4926(Unannotated)
  data: { id: 'Rv0445c(SigK).Mvan_4926(Unannotated)', source: 'Rv0445c(SigK)', target: 'Mvan_4926(Unannotated)' }
},
{// Rv0445c(SigK).Rv0449c(Unannotated)
  data: { id: 'Rv0445c(SigK).Rv0449c(Unannotated)', source: 'Rv0445c(SigK)', target: 'Rv0449c(Unannotated)' }
},
{// Rv0445c(SigK).Rv2873(Mpt83)
  data: { id: 'Rv0445c(SigK).Rv2873(Mpt83)', source: 'Rv0445c(SigK)', target: 'Rv2873(Mpt83)' }
},
{// Rv0445c(SigK).Rv2875(Mpt70)
  data: { id: 'Rv0445c(SigK).Rv2875(Mpt70)', source: 'Rv0445c(SigK)', target: 'Rv2875(Mpt70)' }
},
{// Rv0735(SigL).Rv0735(SigL)
  data: { id: 'Rv0735(SigL).Rv0735(SigL)', source: 'Rv0735(SigL)', target: 'Rv0735(SigL)' }
},
{// Rv0735(SigL).Rv0735(SigL)
  data: { id: 'Rv0735(SigL).Rv0735(SigL)', source: 'Rv0735(SigL)', target: 'Rv0735(SigL)' }
},
{// Rv0735(SigL).Rv1139c(Unannotated)
  data: { id: 'Rv0735(SigL).Rv1139c(Unannotated)', source: 'Rv0735(SigL)', target: 'Rv1139c(Unannotated)' }
},
{// Rv0735(SigL).Rv1660(Pks10)
  data: { id: 'Rv0735(SigL).Rv1660(Pks10)', source: 'Rv0735(SigL)', target: 'Rv1660(Pks10)' }
},
{// Rv0735(SigL).Rv2710(SigB)
  data: { id: 'Rv0735(SigL).Rv2710(SigB)', source: 'Rv0735(SigL)', target: 'Rv2710(SigB)' }
},
{// Rv0735(SigL).Rv2878c(Mpt53)
  data: { id: 'Rv0735(SigL).Rv2878c(Mpt53)', source: 'Rv0735(SigL)', target: 'Rv2878c(Mpt53)' }
},
{// Rv1221(SigE).Rv0251c(Hsp)
  data: { id: 'Rv1221(SigE).Rv0251c(Hsp)', source: 'Rv1221(SigE)', target: 'Rv0251c(Hsp)' }
},
{// Rv1221(SigE).Rv0467(Icl)
  data: { id: 'Rv1221(SigE).Rv0467(Icl)', source: 'Rv1221(SigE)', target: 'Rv0467(Icl)' }
},
{// Rv1221(SigE).Rv0468(FadB2)
  data: { id: 'Rv1221(SigE).Rv0468(FadB2)', source: 'Rv1221(SigE)', target: 'Rv0468(FadB2)' }
},
{// Rv1221(SigE).Rv0563(HtpX)
  data: { id: 'Rv1221(SigE).Rv0563(HtpX)', source: 'Rv1221(SigE)', target: 'Rv0563(HtpX)' }
},
{// Rv1221(SigE).Rv0981(MprA)
  data: { id: 'Rv1221(SigE).Rv0981(MprA)', source: 'Rv1221(SigE)', target: 'Rv0981(MprA)' }
},
{// Rv1221(SigE).Rv1057(Unannotated)
  data: { id: 'Rv1221(SigE).Rv1057(Unannotated)', source: 'Rv1221(SigE)', target: 'Rv1057(Unannotated)' }
},
{// Rv1221(SigE).Rv1130(Unannotated)
  data: { id: 'Rv1221(SigE).Rv1130(Unannotated)', source: 'Rv1221(SigE)', target: 'Rv1130(Unannotated)' }
},
{// Rv1221(SigE).Rv1329c(DinG)
  data: { id: 'Rv1221(SigE).Rv1329c(DinG)', source: 'Rv1221(SigE)', target: 'Rv1329c(DinG)' }
},
{// Rv1221(SigE).Rv2053c(Unannotated)
  data: { id: 'Rv1221(SigE).Rv2053c(Unannotated)', source: 'Rv1221(SigE)', target: 'Rv2053c(Unannotated)' }
},
{// Rv1221(SigE).Rv2710(SigB)
  data: { id: 'Rv1221(SigE).Rv2710(SigB)', source: 'Rv1221(SigE)', target: 'Rv2710(SigB)' }
},
{// Rv1221(SigE).Rv2745c(Unannotated)
  data: { id: 'Rv1221(SigE).Rv2745c(Unannotated)', source: 'Rv1221(SigE)', target: 'Rv2745c(Unannotated)' }
},
{// Rv2069(SigC).MT0117(Unannotated)
  data: { id: 'Rv2069(SigC).MT0117(Unannotated)', source: 'Rv2069(SigC)', target: 'MT0117(Unannotated)' }
},
{// Rv2069(SigC).MT0152(Unannotated)
  data: { id: 'Rv2069(SigC).MT0152(Unannotated)', source: 'Rv2069(SigC)', target: 'MT0152(Unannotated)' }
},
{// Rv2069(SigC).MT0241(Unannotated)
  data: { id: 'Rv2069(SigC).MT0241(Unannotated)', source: 'Rv2069(SigC)', target: 'MT0241(Unannotated)' }
},
{// Rv2069(SigC).MT0300(Unannotated)
  data: { id: 'Rv2069(SigC).MT0300(Unannotated)', source: 'Rv2069(SigC)', target: 'MT0300(Unannotated)' }
},
{// Rv2069(SigC).MT0671(Mma3)
  data: { id: 'Rv2069(SigC).MT0671(Mma3)', source: 'Rv2069(SigC)', target: 'MT0671(Mma3)' }
},
{// Rv2069(SigC).MT0978(SucC)
  data: { id: 'Rv2069(SigC).MT0978(SucC)', source: 'Rv2069(SigC)', target: 'MT0978(SucC)' }
},
{// Rv2069(SigC).MT1629(Unannotated)
  data: { id: 'Rv2069(SigC).MT1629(Unannotated)', source: 'Rv2069(SigC)', target: 'MT1629(Unannotated)' }
},
{// Rv2069(SigC).MT1772(GabD2)
  data: { id: 'Rv2069(SigC).MT1772(GabD2)', source: 'Rv2069(SigC)', target: 'MT1772(GabD2)' }
},
{// Rv2069(SigC).MT2090(Unannotated)
  data: { id: 'Rv2069(SigC).MT2090(Unannotated)', source: 'Rv2069(SigC)', target: 'MT2090(Unannotated)' }
},
{// Rv2069(SigC).MT2977(RpsP)
  data: { id: 'Rv2069(SigC).MT2977(RpsP)', source: 'Rv2069(SigC)', target: 'MT2977(RpsP)' }
},
{// Rv2069(SigC).MT3144(Unannotated)
  data: { id: 'Rv2069(SigC).MT3144(Unannotated)', source: 'Rv2069(SigC)', target: 'MT3144(Unannotated)' }
},
{// Rv2069(SigC).MT3150(Unannotated)
  data: { id: 'Rv2069(SigC).MT3150(Unannotated)', source: 'Rv2069(SigC)', target: 'MT3150(Unannotated)' }
},
{// Rv2069(SigC).MT3153(PgmA)
  data: { id: 'Rv2069(SigC).MT3153(PgmA)', source: 'Rv2069(SigC)', target: 'MT3153(PgmA)' }
},
{// Rv2069(SigC).MT3367(Unannotated)
  data: { id: 'Rv2069(SigC).MT3367(Unannotated)', source: 'Rv2069(SigC)', target: 'MT3367(Unannotated)' }
},
{// Rv2069(SigC).MT3417(SdhC)
  data: { id: 'Rv2069(SigC).MT3417(SdhC)', source: 'Rv2069(SigC)', target: 'MT3417(SdhC)' }
},
{// Rv2069(SigC).MT3568(InfA)
  data: { id: 'Rv2069(SigC).MT3568(InfA)', source: 'Rv2069(SigC)', target: 'MT3568(InfA)' }
},
{// Rv2069(SigC).MT3587(Unannotated)
  data: { id: 'Rv2069(SigC).MT3587(Unannotated)', source: 'Rv2069(SigC)', target: 'MT3587(Unannotated)' }
},
{// Rv2069(SigC).MT3690(Unannotated)
  data: { id: 'Rv2069(SigC).MT3690(Unannotated)', source: 'Rv2069(SigC)', target: 'MT3690(Unannotated)' }
},
{// Rv2710(SigB).BCG0248(PckA)
  data: { id: 'Rv2710(SigB).BCG0248(PckA)', source: 'Rv2710(SigB)', target: 'BCG0248(PckA)' }
},
{// Rv2710(SigB).BCG1138c(GreA)
  data: { id: 'Rv2710(SigB).BCG1138c(GreA)', source: 'Rv2710(SigB)', target: 'BCG1138c(GreA)' }
},
{// Rv2710(SigB).BCG2716(SigA)
  data: { id: 'Rv2710(SigB).BCG2716(SigA)', source: 'Rv2710(SigB)', target: 'BCG2716(SigA)' }
},
{// Rv2710(SigB).BCG3090(Mmr)
  data: { id: 'Rv2710(SigB).BCG3090(Mmr)', source: 'Rv2710(SigB)', target: 'BCG3090(Mmr)' }
},
{// Rv2710(SigB).rrs(16S_rRNA)
  data: { id: 'Rv2710(SigB).rrs(16S_rRNA)', source: 'Rv2710(SigB)', target: 'rrs(16S_rRNA)' }
},
{// Rv2710(SigB).rrs(16S_rRNA)
  data: { id: 'Rv2710(SigB).rrs(16S_rRNA)', source: 'Rv2710(SigB)', target: 'rrs(16S_rRNA)' }
},
{// Rv3223c(SigH).Rv0142(Unannotated)
  data: { id: 'Rv3223c(SigH).Rv0142(Unannotated)', source: 'Rv3223c(SigH)', target: 'Rv0142(Unannotated)' }
},
{// Rv3223c(SigH).Rv0251c(Hsp)
  data: { id: 'Rv3223c(SigH).Rv0251c(Hsp)', source: 'Rv3223c(SigH)', target: 'Rv0251c(Hsp)' }
},
{// Rv3223c(SigH).Rv0350(DnaK)
  data: { id: 'Rv3223c(SigH).Rv0350(DnaK)', source: 'Rv3223c(SigH)', target: 'Rv0350(DnaK)' }
},
{// Rv3223c(SigH).Rv0355c(PPE8)
  data: { id: 'Rv3223c(SigH).Rv0355c(PPE8)', source: 'Rv3223c(SigH)', target: 'Rv0355c(PPE8)' }
},
{// Rv3223c(SigH).Rv0384c(ClpB)
  data: { id: 'Rv3223c(SigH).Rv0384c(ClpB)', source: 'Rv3223c(SigH)', target: 'Rv0384c(ClpB)' }
},
{// Rv3223c(SigH).Rv0991c(Unannotated)
  data: { id: 'Rv3223c(SigH).Rv0991c(Unannotated)', source: 'Rv3223c(SigH)', target: 'Rv0991c(Unannotated)' }
},
{// Rv3223c(SigH).Rv1221(SigE)
  data: { id: 'Rv3223c(SigH).Rv1221(SigE)', source: 'Rv3223c(SigH)', target: 'Rv1221(SigE)' }
},
{// Rv3223c(SigH).Rv1334(Unannotated)
  data: { id: 'Rv3223c(SigH).Rv1334(Unannotated)', source: 'Rv3223c(SigH)', target: 'Rv1334(Unannotated)' }
},
{// Rv3223c(SigH).Rv1471(TrxB1)
  data: { id: 'Rv3223c(SigH).Rv1471(TrxB1)', source: 'Rv3223c(SigH)', target: 'Rv1471(TrxB1)' }
},
{// Rv3223c(SigH).Rv1528c(PapA4)
  data: { id: 'Rv3223c(SigH).Rv1528c(PapA4)', source: 'Rv3223c(SigH)', target: 'Rv1528c(PapA4)' }
},
{// Rv3223c(SigH).Rv1645c(Unannotated)
  data: { id: 'Rv3223c(SigH).Rv1645c(Unannotated)', source: 'Rv3223c(SigH)', target: 'Rv1645c(Unannotated)' }
},
{// Rv3223c(SigH).Rv2466c(Unannotated)
  data: { id: 'Rv3223c(SigH).Rv2466c(Unannotated)', source: 'Rv3223c(SigH)', target: 'Rv2466c(Unannotated)' }
},
{// Rv3223c(SigH).Rv2699c(Unannotated)
  data: { id: 'Rv3223c(SigH).Rv2699c(Unannotated)', source: 'Rv3223c(SigH)', target: 'Rv2699c(Unannotated)' }
},
{// Rv3223c(SigH).Rv2706c(Unannotated)
  data: { id: 'Rv3223c(SigH).Rv2706c(Unannotated)', source: 'Rv3223c(SigH)', target: 'Rv2706c(Unannotated)' }
},
{// Rv3223c(SigH).Rv2710(SigB)
  data: { id: 'Rv3223c(SigH).Rv2710(SigB)', source: 'Rv3223c(SigH)', target: 'Rv2710(SigB)' }
},
{// Rv3223c(SigH).Rv3054c(Unannotated)
  data: { id: 'Rv3223c(SigH).Rv3054c(Unannotated)', source: 'Rv3223c(SigH)', target: 'Rv3054c(Unannotated)' }
},
{// Rv3223c(SigH).Rv3206c(MoeB1)
  data: { id: 'Rv3223c(SigH).Rv3206c(MoeB1)', source: 'Rv3223c(SigH)', target: 'Rv3206c(MoeB1)' }
},
{// Rv3223c(SigH).Rv3223c(SigH)
  data: { id: 'Rv3223c(SigH).Rv3223c(SigH)', source: 'Rv3223c(SigH)', target: 'Rv3223c(SigH)' }
},
{// Rv3223c(SigH).Rv3463(Unannotated)
  data: { id: 'Rv3223c(SigH).Rv3463(Unannotated)', source: 'Rv3223c(SigH)', target: 'Rv3463(Unannotated)' }
},
{// Rv3223c(SigH).Rv3913(TrxB2)
  data: { id: 'Rv3223c(SigH).Rv3913(TrxB2)', source: 'Rv3223c(SigH)', target: 'Rv3913(TrxB2)' }
},
{// Rv3286c(SigF).BCG1281(SigE)
  data: { id: 'Rv3286c(SigF).BCG1281(SigE)', source: 'Rv3286c(SigF)', target: 'BCG1281(SigE)' }
},
{// Rv3286c(SigF).BCG3315c(SigF)
  data: { id: 'Rv3286c(SigF).BCG3315c(SigF)', source: 'Rv3286c(SigF)', target: 'BCG3315c(SigF)' }
},
{// Rv3286c(SigF).MT0011(Ppi-1)
  data: { id: 'Rv3286c(SigF).MT0011(Ppi-1)', source: 'Rv3286c(SigF)', target: 'MT0011(Ppi-1)' }
},
{// Rv3286c(SigF).MT0014(Unannotated)
  data: { id: 'Rv3286c(SigF).MT0014(Unannotated)', source: 'Rv3286c(SigF)', target: 'MT0014(Unannotated)' }
},
{// Rv3286c(SigF).MT0015(Unannotated)
  data: { id: 'Rv3286c(SigF).MT0015(Unannotated)', source: 'Rv3286c(SigF)', target: 'MT0015(Unannotated)' }
},
{// Rv3286c(SigF).MT0026(Unannotated)
  data: { id: 'Rv3286c(SigF).MT0026(Unannotated)', source: 'Rv3286c(SigF)', target: 'MT0026(Unannotated)' }
},
{// Rv3286c(SigF).MT0215(Unannotated)
  data: { id: 'Rv3286c(SigF).MT0215(Unannotated)', source: 'Rv3286c(SigF)', target: 'MT0215(Unannotated)' }
},
{// Rv3286c(SigF).MT0343(Unannotated)
  data: { id: 'Rv3286c(SigF).MT0343(Unannotated)', source: 'Rv3286c(SigF)', target: 'MT0343(Unannotated)' }
},
{// Rv3286c(SigF).MT0376(Unannotated)
  data: { id: 'Rv3286c(SigF).MT0376(Unannotated)', source: 'Rv3286c(SigF)', target: 'MT0376(Unannotated)' }
},
{// Rv3286c(SigF).MT0445(Unannotated)
  data: { id: 'Rv3286c(SigF).MT0445(Unannotated)', source: 'Rv3286c(SigF)', target: 'MT0445(Unannotated)' }
},
{// Rv3286c(SigF).MT0537(Unannotated)
  data: { id: 'Rv3286c(SigF).MT0537(Unannotated)', source: 'Rv3286c(SigF)', target: 'MT0537(Unannotated)' }
},
{// Rv3286c(SigF).MT0762(Unannotated)
  data: { id: 'Rv3286c(SigF).MT0762(Unannotated)', source: 'Rv3286c(SigF)', target: 'MT0762(Unannotated)' }
},
{// Rv3286c(SigF).MT0917(Unannotated)
  data: { id: 'Rv3286c(SigF).MT0917(Unannotated)', source: 'Rv3286c(SigF)', target: 'MT0917(Unannotated)' }
},
{// Rv3286c(SigF).MT0990(Unannotated)
  data: { id: 'Rv3286c(SigF).MT0990(Unannotated)', source: 'Rv3286c(SigF)', target: 'MT0990(Unannotated)' }
},
{// Rv3286c(SigF).MT1124(PanK)
  data: { id: 'Rv3286c(SigF).MT1124(PanK)', source: 'Rv3286c(SigF)', target: 'MT1124(PanK)' }
},
{// Rv3286c(SigF).MT2178(Unannotated)
  data: { id: 'Rv3286c(SigF).MT2178(Unannotated)', source: 'Rv3286c(SigF)', target: 'MT2178(Unannotated)' }
},
{// Rv3286c(SigF).Rv2710(SigB)
  data: { id: 'Rv3286c(SigF).Rv2710(SigB)', source: 'Rv3286c(SigF)', target: 'Rv2710(SigB)' }
},
{// Rv3286c(SigF).Rv3287c(RsbW)
  data: { id: 'Rv3286c(SigF).Rv3287c(RsbW)', source: 'Rv3286c(SigF)', target: 'Rv3287c(RsbW)' }
},
{// Rv3328c(SigJ).Rv1189(SigI)
  data: { id: 'Rv3328c(SigJ).Rv1189(SigI)', source: 'Rv3328c(SigJ)', target: 'Rv1189(SigI)' }
},
{// Rv3414c(SigD).MSMEG_1599(RNA_pol_sigma-70_factor)
  data: { id: 'Rv3414c(SigD).MSMEG_1599(RNA_pol_sigma-70_factor)', source: 'Rv3414c(SigD)', target: 'MSMEG_1599(RNA_pol_sigma-70_factor)' }
},
{// Rv3414c(SigD).Rv0341(IniB)
  data: { id: 'Rv3414c(SigD).Rv0341(IniB)', source: 'Rv3414c(SigD)', target: 'Rv0341(IniB)' }
},
{// Rv3414c(SigD).Rv0440(GroEL2)
  data: { id: 'Rv3414c(SigD).Rv0440(GroEL2)', source: 'Rv3414c(SigD)', target: 'Rv0440(GroEL2)' }
},
{// Rv3414c(SigD).Rv1815(Unannotated)
  data: { id: 'Rv3414c(SigD).Rv1815(Unannotated)', source: 'Rv3414c(SigD)', target: 'Rv1815(Unannotated)' }
},
{// Rv3414c(SigD).Rv1884c(RpfC)
  data: { id: 'Rv3414c(SigD).Rv1884c(RpfC)', source: 'Rv3414c(SigD)', target: 'Rv1884c(RpfC)' }
},
{// Rv3414c(SigD).Rv3414c(SigD)
  data: { id: 'Rv3414c(SigD).Rv3414c(SigD)', source: 'Rv3414c(SigD)', target: 'Rv3414c(SigD)' }
},
{// Rv3911(SigM).MT0040(Unannotated)
  data: { id: 'Rv3911(SigM).MT0040(Unannotated)', source: 'Rv3911(SigM)', target: 'MT0040(Unannotated)' }
},
{// Rv3911(SigM).MT0327(Unannotated)
  data: { id: 'Rv3911(SigM).MT0327(Unannotated)', source: 'Rv3911(SigM)', target: 'MT0327(Unannotated)' }
},
{// Rv3911(SigM).MT0497(Unannotated)
  data: { id: 'Rv3911(SigM).MT0497(Unannotated)', source: 'Rv3911(SigM)', target: 'MT0497(Unannotated)' }
},
{// Rv3911(SigM).MT0680(RplJ)
  data: { id: 'Rv3911(SigM).MT0680(RplJ)', source: 'Rv3911(SigM)', target: 'MT0680(RplJ)' }
},
{// Rv3911(SigM).MT0713(Tuf)
  data: { id: 'Rv3911(SigM).MT0713(Tuf)', source: 'Rv3911(SigM)', target: 'MT0713(Tuf)' }
},
{// Rv3911(SigM).MT2973(Unannotated)
  data: { id: 'Rv3911(SigM).MT2973(Unannotated)', source: 'Rv3911(SigM)', target: 'MT2973(Unannotated)' }
},
{// Rv3911(SigM).MT3067(Unannotated)
  data: { id: 'Rv3911(SigM).MT3067(Unannotated)', source: 'Rv3911(SigM)', target: 'MT3067(Unannotated)' }
},
{// Rv3911(SigM).MT3176(Unannotated)
  data: { id: 'Rv3911(SigM).MT3176(Unannotated)', source: 'Rv3911(SigM)', target: 'MT3176(Unannotated)' }
},
{// Rv3911(SigM).MT3177(Unannotated)
  data: { id: 'Rv3911(SigM).MT3177(Unannotated)', source: 'Rv3911(SigM)', target: 'MT3177(Unannotated)' }
},
{// Rv3911(SigM).MT3179(Unannotated)
  data: { id: 'Rv3911(SigM).MT3179(Unannotated)', source: 'Rv3911(SigM)', target: 'MT3179(Unannotated)' }
},
{// Rv3911(SigM).MT3544(Unannotated)
  data: { id: 'Rv3911(SigM).MT3544(Unannotated)', source: 'Rv3911(SigM)', target: 'MT3544(Unannotated)' }
},
{// Rv3911(SigM).MT3545(Unannotated)
  data: { id: 'Rv3911(SigM).MT3545(Unannotated)', source: 'Rv3911(SigM)', target: 'MT3545(Unannotated)' }
},
{// Rv3911(SigM).MT3549(Unannotated)
  data: { id: 'Rv3911(SigM).MT3549(Unannotated)', source: 'Rv3911(SigM)', target: 'MT3549(Unannotated)' }
},
{// Rv3911(SigM).MT3550(Unannotated)
  data: { id: 'Rv3911(SigM).MT3550(Unannotated)', source: 'Rv3911(SigM)', target: 'MT3550(Unannotated)' }
},
{// Rv3911(SigM).MT3553(Unannotated)
  data: { id: 'Rv3911(SigM).MT3553(Unannotated)', source: 'Rv3911(SigM)', target: 'MT3553(Unannotated)' }
},
{// Rv3911(SigM).MT3554(Unannotated)
  data: { id: 'Rv3911(SigM).MT3554(Unannotated)', source: 'Rv3911(SigM)', target: 'MT3554(Unannotated)' }
},
{// Rv3911(SigM).MT3555(Unannotated)
  data: { id: 'Rv3911(SigM).MT3555(Unannotated)', source: 'Rv3911(SigM)', target: 'MT3555(Unannotated)' }
},
{// Rv3911(SigM).MT4023(Unannotated)
  data: { id: 'Rv3911(SigM).MT4023(Unannotated)', source: 'Rv3911(SigM)', target: 'MT4023(Unannotated)' }
},
{// Rv3911(SigM).MT4024(Unannotated)
  data: { id: 'Rv3911(SigM).MT4024(Unannotated)', source: 'Rv3911(SigM)', target: 'MT4024(Unannotated)' }
},
{// Rv3911(SigM).MT4025(Unannotated)
  data: { id: 'Rv3911(SigM).MT4025(Unannotated)', source: 'Rv3911(SigM)', target: 'MT4025(Unannotated)' }
},
{// Rv3911(SigM).MT4026(PcnB)
  data: { id: 'Rv3911(SigM).MT4026(PcnB)', source: 'Rv3911(SigM)', target: 'MT4026(PcnB)' }
},
{// Rv3911(SigM).Rv2009(Unannotated)
  data: { id: 'Rv3911(SigM).Rv2009(Unannotated)', source: 'Rv3911(SigM)', target: 'Rv2009(Unannotated)' }
},
{// Rv3911(SigM).Rv2053c(Unannotated)
  data: { id: 'Rv3911(SigM).Rv2053c(Unannotated)', source: 'Rv3911(SigM)', target: 'Rv2053c(Unannotated)' }
},
{// Rv3911(SigM).Rv3094c(Unannotated)
  data: { id: 'Rv3911(SigM).Rv3094c(Unannotated)', source: 'Rv3911(SigM)', target: 'Rv3094c(Unannotated)' }
},
],

style: [
  {
  	selector: 'node',
  	style: {
  		'background-color': '#10b578',
  		'label': 'data(id)'
  	}
  },
  {
  	selector: 'edge',
  	style: {
  		'width': 3,
  		'line-color': '#ccc',
  		'target-arrow-color': '#ccc',
  		'target-arrow-shape': 'triangle'
  	}
  },
  {
    selector: '.hide-labels',
    style: {
      'content': '',
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

// Function to range colors green to yellow to red from 0 to 100
function GreenYellowRed(number) {
  number--; // working with 0-99 will be easier

  if (number < 50) {
    // green to yellow
    var r = Math.floor(255 * (number / 50));
    var g = 255;

  } else {
    // yellow to red
    var r = 255;
    var g = Math.floor(255 * ((50-number%50) / 50));
  }
  var b = 0;
  return r + ',' + g + ',' + b;
}


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
    // 'background-color': 'rgb(' + GreenYellowRed(c) + ')'
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

