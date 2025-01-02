const json = [
  {
    book_id: 2051,
    sys_icons: ["volume_up", "volume_down", "stop"],
    encryption: {
      header_key: 256,
      prekey: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      prekey_dw: 245,
    },
    book_mode_read: {
      mode_0: ["mod_zakladni_mp3_data"],
      mode_2: ["mod_vice_inf_mp3_data"],
    },
    start_button_1st_read: {
      mode_0: ["kniha_vitej1_mp3_data"],
      mode_1: ["kniha_vitej1_mp3_data"],
      mode_2: ["kniha_vitej1_mp3_data"],
    },
    start_button_2nd_read: {
      mode_0: ["kniha_vitej2_mp3_data"],
      mode_1: ["kniha_vitej2_mp3_data"],
      mode_2: ["kniha_vitej2_mp3_data"],
    },
    unk_tbl_ptr_16: ["oid_x01A6_chime", "oid_x01A7_chime", "oid_x01A8_chime"],
    unk_tbl_ptr_27: [
      "oid_x01A9_buzz",
      "oid_x01AA_buzz",
      "oid_x01AB_buzz",
      "oid_x01AC_buzz",
      "oid_x01AD_buzz",
    ],
    unk_tbl_ptr_28: ["oid_x01AE_ting", "oid_x01AF_ting", "oid_x01B0_ting"],
    unk_tbl_ptr_29: ["oid_x01B5_buzz", "oid_x01B6_buzz", "oid_x01B7_buzz"],
  },
  {
    quiz_neg1: ["oid_x019B_buzz", "oid_x019C_buzz", "oid_x019D_buzz"],
    quiz_neg2: [
      "oid_x019E_buzz_znovu",
      "oid_x019F_buzz_jednou",
      "oid_x01A0_buzz",
      "oid_x01A1_buzz_znovu",
      "oid_x01A2_buzz_jednou",
      "oid_x01A3_buzz",
    ],
    quiz_pos1: ["oid_x0190_ting", "oid_x0191_ting"],
    quiz_pos2: [
      "oid_x0193_ting_vyborne",
      "oid_x0194_ting_velmidobre",
      "oid_x0195_ting",
      "oid_x0196_ting_vyborne",
      "oid_x0197_ting_velmidobre",
      "oid_x0198_ting",
      "oid_x0199_ting_vyborne",
      "oid_x019A_ting_velmidobre",
    ],
    quiz_results: [
      "oid_x01B8_kviz_vysledek_0",
      "oid_x01B9_kviz_vysledek_1",
      "oid_x01BA_kviz_vysledek_2",
      "oid_x01BB_kviz_vysledek_3",
      "oid_x01BC_kviz_vysledek_4",
      "oid_x01BD_kviz_vysledek_5",
    ],
    quizes: [
      {
        q_asked: 5,
        q_oid: "oid_100_kviz1",
        q_type: 0,
        q_unk: 0,
        questions: [
          {
            q1_good_reply_oids: [
              "oid_11001_slepicka",
              "oid_11007_slepicka",
              "oid_11011_slepicka",
              "oid_11014_slepicka",
              "oid_11018_slepicka",
              "oid_11023_slepicka",
              "oid_11026_slepicka",
              "oid_11030_slepicka",
              "oid_11034_slepicka",
            ],
            q1_oid: "oid_13000_kdo_se_rozdeli",
            q1_unk: 0,
          },
          {
            q1_good_reply_oids: [
              "oid_11002_kohoutek",
              "oid_11006_kohoutek_lakomec",
              "oid_11010_kohoutek",
            ],
            q1_oid: "oid_13001_kdo_je_lakomec",
            q1_unk: 0,
          },
          {
            q1_good_reply_oids: [
              "oid_11033_louka",
              "oid_11001_slepicka",
              "oid_11007_slepicka",
              "oid_11011_slepicka",
              "oid_11014_slepicka",
              "oid_11018_slepicka",
              "oid_11023_slepicka",
              "oid_11026_slepicka",
              "oid_11030_slepicka",
              "oid_11034_slepicka",
            ],
            q1_oid: "oid_13002_kdo_chce_vodu",
            q1_unk: 0,
          },
          {
            q1_good_reply_oids: ["oid_11015_studna"],
            q1_oid: "oid_13003_kdo_chce_satek",
            q1_unk: 0,
          },
          {
            q1_good_reply_oids: ["oid_11019_svadlenka"],
            q1_oid: "oid_13004_kdo_dal_satek",
            q1_unk: 0,
          },
          {
            q1_good_reply_oids: ["oid_11019_svadlenka"],
            q1_oid: "oid_13005_kdo_chce_botu",
            q1_unk: 0,
          },
          {
            q1_good_reply_oids: ["oid_11022_svec"],
            q1_oid: "oid_13006_kdo_dal_botu",
            q1_unk: 0,
          },
          {
            q1_good_reply_oids: ["oid_11022_svec"],
            q1_oid: "oid_13007_kdo_chce_jelito",
            q1_unk: 0,
          },
          {
            q1_good_reply_oids: ["oid_11027_prasatko"],
            q1_oid: "oid_13008_kdo_dal_jelito",
            q1_unk: 0,
          },
          {
            q1_good_reply_oids: ["oid_11027_prasatko"],
            q1_oid: "oid_13009_kdo_chce_mleko",
            q1_unk: 0,
          },
          {
            q1_good_reply_oids: ["oid_11031_kravicka"],
            q1_oid: "oid_13010_kdo_dal_mleko",
            q1_unk: 0,
          },
          {
            q1_good_reply_oids: ["oid_11031_kravicka"],
            q1_oid: "oid_13011_kdo_chce_travicku",
            q1_unk: 0,
          },
          {
            q1_good_reply_oids: ["oid_11033_louka"],
            q1_oid: "oid_13012_kdo_dal_travicku",
            q1_unk: 0,
          },
        ],
      },
    ],
  },
  {
    oid_0: {
      mode_0: ["kniha_vitej1_mp3_data"],
      mode_1: ["kniha_vitej1_mp3_data"],
    },
    oid_100_kviz1: {
      mode_0: ["system_kviz_intro_standard_mp3_data"],
    },
    oid_x0190_ting: {
      mode_0: ["system_ting_mp3_data"],
      mode_1: ["system_ting_mp3_data"],
    },
    oid_x0191_ting: {
      mode_0: ["system_ting_mp3_data"],
      mode_1: ["system_ting_mp3_data"],
    },
    oid_x0193_ting_vyborne: {
      mode_0: ["system_kviz_ting_vyborne_mp3_data"],
      mode_1: ["system_kviz_ting_vyborne_mp3_data"],
    },
    oid_x0194_ting_velmidobre: {
      mode_0: ["system_kviz_ting_velmidobre_mp3_data"],
      mode_1: ["system_kviz_ting_velmidobre_mp3_data"],
    },
    oid_x0195_ting: {
      mode_0: ["system_ting_mp3_data"],
      mode_1: ["system_ting_mp3_data"],
    },
    oid_x0196_ting_vyborne: {
      mode_0: ["system_kviz_ting_vyborne_mp3_data"],
      mode_1: ["system_kviz_ting_vyborne_mp3_data"],
    },
    oid_x0197_ting_velmidobre: {
      mode_0: ["system_kviz_ting_velmidobre_mp3_data"],
      mode_1: ["system_kviz_ting_velmidobre_mp3_data"],
    },
    oid_x0198_ting: {
      mode_0: ["system_ting_mp3_data"],
      mode_1: ["system_ting_mp3_data"],
    },
    oid_x0199_ting_vyborne: {
      mode_0: ["system_kviz_ting_vyborne_mp3_data"],
      mode_1: ["system_kviz_ting_vyborne_mp3_data"],
    },
    oid_x019A_ting_velmidobre: {
      mode_0: ["system_kviz_ting_velmidobre_mp3_data"],
      mode_1: ["system_kviz_ting_velmidobre_mp3_data"],
    },
    oid_x019B_buzz: {
      mode_0: ["system_buzz_mp3_data"],
      mode_1: ["system_buzz_mp3_data"],
    },
    oid_x019C_buzz: {
      mode_0: ["system_buzz_mp3_data"],
      mode_1: ["system_buzz_mp3_data"],
    },
    oid_x019D_buzz: {
      mode_0: ["system_buzz_mp3_data"],
      mode_1: ["system_buzz_mp3_data"],
    },
    oid_x019E_buzz_znovu: {
      mode_0: ["system_kviz_buzz_znovu_mp3_data"],
      mode_1: ["system_kviz_buzz_znovu_mp3_data"],
    },
    oid_x019F_buzz_jednou: {
      mode_0: ["system_kviz_buzz_jednou_mp3_data"],
      mode_1: ["system_kviz_buzz_jednou_mp3_data"],
    },
    oid_x01A0_buzz: {
      mode_0: ["system_buzz_mp3_data"],
      mode_1: ["system_buzz_mp3_data"],
    },
    oid_x01A1_buzz_znovu: {
      mode_0: ["system_kviz_buzz_znovu_mp3_data"],
      mode_1: ["system_kviz_buzz_znovu_mp3_data"],
    },
    oid_x01A2_buzz_jednou: {
      mode_0: ["system_kviz_buzz_jednou_mp3_data"],
      mode_1: ["system_kviz_buzz_jednou_mp3_data"],
    },
    oid_x01A3_buzz: {
      mode_0: ["system_buzz_mp3_data"],
      mode_1: ["system_buzz_mp3_data"],
    },
    oid_x01A6_chime: {
      mode_0: ["system_chime_mp3_data"],
      mode_1: ["system_chime_mp3_data"],
    },
    oid_x01A7_chime: {
      mode_0: ["system_chime_mp3_data"],
      mode_1: ["system_chime_mp3_data"],
    },
    oid_x01A8_chime: {
      mode_0: ["system_chime_mp3_data"],
      mode_1: ["system_chime_mp3_data"],
    },
    oid_x01A9_buzz: {
      mode_0: ["system_buzz_mp3_data"],
      mode_1: ["system_buzz_mp3_data"],
    },
    oid_x01AA_buzz: {
      mode_0: ["system_buzz_mp3_data"],
      mode_1: ["system_buzz_mp3_data"],
    },
    oid_x01AB_buzz: {
      mode_0: ["system_buzz_mp3_data"],
      mode_1: ["system_buzz_mp3_data"],
    },
    oid_x01AC_buzz: {
      mode_0: ["system_buzz_mp3_data"],
      mode_1: ["system_buzz_mp3_data"],
    },
    oid_x01AD_buzz: {
      mode_0: ["system_buzz_mp3_data"],
      mode_1: ["system_buzz_mp3_data"],
    },
    oid_x01AE_ting: {
      mode_0: ["system_ting_mp3_data"],
      mode_1: ["system_ting_mp3_data"],
    },
    oid_x01AF_ting: {
      mode_0: ["system_ting_mp3_data"],
      mode_1: ["system_ting_mp3_data"],
    },
    oid_x01B0_ting: {
      mode_0: ["system_ting_mp3_data"],
      mode_1: ["system_ting_mp3_data"],
    },
    oid_x01B5_buzz: {
      mode_0: ["system_buzz_mp3_data"],
      mode_1: ["system_buzz_mp3_data"],
    },
    oid_x01B6_buzz: {
      mode_0: ["system_buzz_mp3_data"],
      mode_1: ["system_buzz_mp3_data"],
    },
    oid_x01B7_buzz: {
      mode_0: ["system_buzz_mp3_data"],
      mode_1: ["system_buzz_mp3_data"],
    },
    oid_x01B8_kviz_vysledek_0: {
      mode_0: ["system_kviz_0_dobre_mp3_data"],
      mode_1: ["system_kviz_0_dobre_mp3_data"],
    },
    oid_x01B9_kviz_vysledek_1: {
      mode_0: ["system_kviz_1_dobre_mp3_data"],
      mode_1: ["system_kviz_1_dobre_mp3_data"],
    },
    oid_x01BA_kviz_vysledek_2: {
      mode_0: ["system_kviz_2_dobre_mp3_data"],
      mode_1: ["system_kviz_2_dobre_mp3_data"],
    },
    oid_x01BB_kviz_vysledek_3: {
      mode_0: ["system_kviz_3_dobre_mp3_data"],
      mode_1: ["system_kviz_3_dobre_mp3_data"],
    },
    oid_x01BC_kviz_vysledek_4: {
      mode_0: ["system_kviz_4_dobre_mp3_data"],
      mode_1: ["system_kviz_4_dobre_mp3_data"],
    },
    oid_x01BD_kviz_vysledek_5: {
      mode_0: ["system_kviz_5_dobre_mp3_data"],
      mode_1: ["system_kviz_5_dobre_mp3_data"],
    },
    oid_11000_deleni: {
      mode_0: ["mod0_zrnicko_rozdelili_mp3_data"],
      mode_1: ["mod0_zrnicko_rozdelili_mp3_data"],
      mode_2: ["mod2_krok1_mp3_data"],
    },
    oid_11001_slepicka: {
      mode_0: ["mod0_slepicka_mp3_data"],
      mode_1: ["mod0_slepicka_mp3_data"],
      mode_2: ["mod2_krok1_mp3_data"],
    },
    oid_11002_kohoutek: {
      mode_0: ["mod0_kohoutek_mp3_data"],
      mode_1: ["mod0_kohoutek_mp3_data"],
      mode_2: ["mod2_krok1_mp3_data"],
    },
    oid_11003_zrnicko: {
      mode_0: ["mod0_zrnicko_mp3_data"],
      mode_1: ["mod0_zrnicko_mp3_data"],
      mode_2: ["mod2_krok1_mp3_data"],
    },
    oid_11004_nedeleni: {
      mode_0: ["mod0_nedelit_se_mp3_data"],
      mode_1: ["mod0_nedelit_se_mp3_data"],
      mode_2: ["mod2_krok2_mp3_data"],
    },
    oid_11005_zrnicko: {
      mode_0: ["mod0_zrnicko_mp3_data"],
      mode_1: ["mod0_zrnicko_mp3_data"],
      mode_2: ["mod2_krok2_mp3_data"],
    },
    oid_11006_kohoutek_lakomec: {
      mode_0: ["mod0_kohoutek_lakomy_mp3_data"],
      mode_1: ["mod0_kohoutek_lakomy_mp3_data"],
      mode_2: ["mod2_krok2_mp3_data"],
    },
    oid_11007_slepicka: {
      mode_0: ["mod0_slepicka_mp3_data"],
      mode_1: ["mod0_slepicka_mp3_data"],
      mode_2: ["mod2_krok2_mp3_data"],
    },
    oid_11010_kohoutek: {
      mode_0: ["mod0_kohoutek_dusi_mp3_data"],
      mode_1: ["mod0_kohoutek_dusi_mp3_data"],
      mode_2: ["mod2_krok3_mp3_data"],
    },
    oid_11011_slepicka: {
      mode_0: ["mod0_slepicka_vydesena_mp3_data"],
      mode_1: ["mod0_slepicka_vydesena_mp3_data"],
      mode_2: ["mod2_krok3_mp3_data"],
    },
    oid_11036_smrt: {
      mode_0: ["mod0_smrt_mp3_data"],
      mode_1: ["mod0_smrt_mp3_data"],
      mode_2: ["mod2_krok3_mp3_data"],
    },
    oid_11012_voda: {
      mode_0: ["mod0_voda_mp3_data"],
      mode_1: ["mod0_voda_mp3_data"],
      mode_2: ["mod2_krok4_mp3_data"],
    },
    oid_11013_satek: {
      mode_0: ["mod0_satek_mp3_data"],
      mode_1: ["mod0_satek_mp3_data"],
      mode_2: ["mod2_krok4_mp3_data"],
    },
    oid_11014_slepicka: {
      mode_0: ["mod0_slepicka_mp3_data"],
      mode_1: ["mod0_slepicka_mp3_data"],
      mode_2: ["mod2_krok4_mp3_data"],
    },
    oid_11015_studna: {
      mode_0: ["mod0_studna_mp3_data"],
      mode_1: ["mod0_studna_mp3_data"],
      mode_2: ["mod2_krok4_mp3_data"],
    },
    oid_11016_satek: {
      mode_0: ["mod0_satek_mp3_data"],
      mode_1: ["mod0_satek_mp3_data"],
      mode_2: ["mod2_krok5_mp3_data"],
    },
    oid_11017_bota: {
      mode_0: ["mod0_bota_mp3_data"],
      mode_1: ["mod0_bota_mp3_data"],
      mode_2: ["mod2_krok5_mp3_data"],
    },
    oid_11018_slepicka: {
      mode_0: ["mod0_slepicka_mp3_data"],
      mode_1: ["mod0_slepicka_mp3_data"],
      mode_2: ["mod2_krok5_mp3_data"],
    },
    oid_11019_svadlenka: {
      mode_0: ["mod0_svadlenka_mp3_data"],
      mode_1: ["mod0_svadlenka_mp3_data"],
      mode_2: ["mod2_krok5_mp3_data"],
    },
    oid_11020_jelito: {
      mode_0: ["mod0_jelito_mp3_data"],
      mode_1: ["mod0_jelito_mp3_data"],
      mode_2: ["mod2_krok6_mp3_data"],
    },
    oid_11021_bota: {
      mode_0: ["mod0_bota_mp3_data"],
      mode_1: ["mod0_bota_mp3_data"],
      mode_2: ["mod2_krok6_mp3_data"],
    },
    oid_11022_svec: {
      mode_0: ["mod0_svec_mp3_data"],
      mode_1: ["mod0_svec_mp3_data"],
      mode_2: ["mod2_krok6_mp3_data"],
    },
    oid_11023_slepicka: {
      mode_0: ["mod0_slepicka_mp3_data"],
      mode_1: ["mod0_slepicka_mp3_data"],
      mode_2: ["mod2_krok6_mp3_data"],
    },
    oid_11024_jelito: {
      mode_0: ["mod0_jelito_mp3_data"],
      mode_1: ["mod0_jelito_mp3_data"],
      mode_2: ["mod2_krok7_mp3_data"],
    },
    oid_11025_mleko: {
      mode_0: ["mod0_mleko_mp3_data"],
      mode_1: ["mod0_mleko_mp3_data"],
      mode_2: ["mod2_krok7_mp3_data"],
    },
    oid_11026_slepicka: {
      mode_0: ["mod0_slepicka_mp3_data"],
      mode_1: ["mod0_slepicka_mp3_data"],
      mode_2: ["mod2_krok7_mp3_data"],
    },
    oid_11027_prasatko: {
      mode_0: ["mod0_prasatko_mp3_data"],
      mode_1: ["mod0_prasatko_mp3_data"],
      mode_2: ["mod2_krok7_mp3_data"],
    },
    oid_11028_mleko: {
      mode_0: ["mod0_mleko_mp3_data"],
      mode_1: ["mod0_mleko_mp3_data"],
      mode_2: ["mod2_krok8_mp3_data"],
    },
    oid_11029_travicka: {
      mode_0: ["mod0_travicka_mp3_data"],
      mode_1: ["mod0_travicka_mp3_data"],
      mode_2: ["mod2_krok8_mp3_data"],
    },
    oid_11030_slepicka: {
      mode_0: ["mod0_slepicka_mp3_data"],
      mode_1: ["mod0_slepicka_mp3_data"],
      mode_2: ["mod2_krok8_mp3_data"],
    },
    oid_11031_kravicka: {
      mode_0: ["mod0_kravicka_mp3_data"],
      mode_1: ["mod0_kravicka_mp3_data"],
      mode_2: ["mod2_krok8_mp3_data"],
    },
    oid_11032_mrak: {
      mode_0: ["mod0_mrak_mp3_data"],
      mode_1: ["mod0_mrak_mp3_data"],
      mode_2: ["mod2_krok9_mp3_data"],
    },
    oid_11033_louka: {
      mode_0: ["mod0_louka_mp3_data"],
      mode_1: ["mod0_louka_mp3_data"],
      mode_2: ["mod2_krok9_mp3_data"],
    },
    oid_11034_slepicka: {
      mode_0: ["mod0_slepicka_mp3_data"],
      mode_1: ["mod0_slepicka_mp3_data"],
      mode_2: ["mod2_krok9_mp3_data"],
    },
    oid_11035_finale: {
      mode_0: ["mod0_finale_mp3_data"],
      mode_1: ["mod0_finale_mp3_data"],
      mode_2: ["mod2_krok10_mp3_data"],
    },
    oid_12000_vsechno: {
      mode_0: [
        "mod_cela_pohadka_mp3_data",
        "mod2_krok1_mp3_data",
        "mod2_krok2_mp3_data",
        "mod2_krok3_mp3_data",
        "mod2_krok4_mp3_data",
        "mod2_krok5_mp3_data",
        "mod2_krok6_mp3_data",
        "mod2_krok7_mp3_data",
        "mod2_krok8_mp3_data",
        "mod2_krok9_mp3_data",
        "mod2_krok10_mp3_data",
      ],
      mode_1: [
        "mod_cela_pohadka_mp3_data",
        "mod2_krok1_mp3_data",
        "mod2_krok2_mp3_data",
        "mod2_krok3_mp3_data",
        "mod2_krok4_mp3_data",
        "mod2_krok5_mp3_data",
        "mod2_krok6_mp3_data",
        "mod2_krok7_mp3_data",
        "mod2_krok8_mp3_data",
        "mod2_krok9_mp3_data",
        "mod2_krok10_mp3_data",
      ],
      mode_2: [
        "mod_cela_pohadka_mp3_data",
        "mod2_krok1_mp3_data",
        "mod2_krok2_mp3_data",
        "mod2_krok3_mp3_data",
        "mod2_krok4_mp3_data",
        "mod2_krok5_mp3_data",
        "mod2_krok6_mp3_data",
        "mod2_krok7_mp3_data",
        "mod2_krok8_mp3_data",
        "mod2_krok9_mp3_data",
        "mod2_krok10_mp3_data",
      ],
    },
    oid_13000_kdo_se_rozdeli: {
      mode_0: ["kviz_ot_kdo_se_rozdeli_mp3_data"],
      mode_1: ["kviz_ot_kdo_se_rozdeli_mp3_data"],
      mode_2: ["kviz_ot_kdo_se_rozdeli_mp3_data"],
    },
    oid_13001_kdo_je_lakomec: {
      mode_0: ["kviz_ot_kdo_je_lakomec_mp3_data"],
      mode_1: ["kviz_ot_kdo_je_lakomec_mp3_data"],
      mode_2: ["kviz_ot_kdo_je_lakomec_mp3_data"],
    },
    oid_13002_kdo_chce_vodu: {
      mode_0: ["kviz_ot_kdo_chce_vodu_mp3_data"],
      mode_1: ["kviz_ot_kdo_chce_vodu_mp3_data"],
      mode_2: ["kviz_ot_kdo_chce_vodu_mp3_data"],
    },
    oid_13003_kdo_chce_satek: {
      mode_0: ["kviz_ot_kdo_chce_satek_mp3_data"],
      mode_1: ["kviz_ot_kdo_chce_satek_mp3_data"],
      mode_2: ["kviz_ot_kdo_chce_satek_mp3_data"],
    },
    oid_13004_kdo_dal_satek: {
      mode_0: ["kviz_ot_kdo_dal_satek_mp3_data"],
      mode_1: ["kviz_ot_kdo_dal_satek_mp3_data"],
      mode_2: ["kviz_ot_kdo_dal_satek_mp3_data"],
    },
    oid_13005_kdo_chce_botu: {
      mode_0: ["kviz_ot_kdo_chce_botu_mp3_data"],
      mode_1: ["kviz_ot_kdo_chce_botu_mp3_data"],
      mode_2: ["kviz_ot_kdo_chce_botu_mp3_data"],
    },
    oid_13006_kdo_dal_botu: {
      mode_0: ["kviz_ot_kdo_dal_botu_mp3_data"],
      mode_1: ["kviz_ot_kdo_dal_botu_mp3_data"],
      mode_2: ["kviz_ot_kdo_dal_botu_mp3_data"],
    },
    oid_13007_kdo_chce_jelito: {
      mode_0: ["kviz_ot_kdo_chce_jelito_mp3_data"],
      mode_1: ["kviz_ot_kdo_chce_jelito_mp3_data"],
      mode_2: ["kviz_ot_kdo_chce_jelito_mp3_data"],
    },
    oid_13008_kdo_dal_jelito: {
      mode_0: ["kviz_ot_kdo_dal_jelito_mp3_data"],
      mode_1: ["kviz_ot_kdo_dal_jelito_mp3_data"],
      mode_2: ["kviz_ot_kdo_dal_jelito_mp3_data"],
    },
    oid_13009_kdo_chce_mleko: {
      mode_0: ["kviz_ot_kdo_chce_mleko_mp3_data"],
      mode_1: ["kviz_ot_kdo_chce_mleko_mp3_data"],
      mode_2: ["kviz_ot_kdo_chce_mleko_mp3_data"],
    },
    oid_13010_kdo_dal_mleko: {
      mode_0: ["kviz_ot_kdo_dal_mleko_mp3_data"],
      mode_1: ["kviz_ot_kdo_dal_mleko_mp3_data"],
      mode_2: ["kviz_ot_kdo_dal_mleko_mp3_data"],
    },
    oid_13011_kdo_chce_travicku: {
      mode_0: ["kviz_ot_kdo_chce_travicku_mp3_data"],
      mode_1: ["kviz_ot_kdo_chce_travicku_mp3_data"],
      mode_2: ["kviz_ot_kdo_chce_travicku_mp3_data"],
    },
    oid_13012_kdo_dal_travicku: {
      mode_0: ["kviz_ot_kdo_dal_travicku_mp3_data"],
      mode_1: ["kviz_ot_kdo_dal_travicku_mp3_data"],
      mode_2: ["kviz_ot_kdo_dal_travicku_mp3_data"],
    },
  },
];
