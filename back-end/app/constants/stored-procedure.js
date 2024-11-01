// DBO
const SP_PEREKAMAN_PTK = 'dev.sp_perekaman_ptk';
const SP_GET_AGAMA_ALL = 'dbo.sp_get_agama_all';
const SP_GET_JENIS_PTK_ALL = 'dbo.sp_get_jenis_ptk_all';
const SP_GET_KEBUTUHAN_KHUSUS_ALL = 'sp_get_kebutuhan_khusus_all';
const SP_GET_KEBUTUHAN_KHUSUS_BY_NAMA= 'sp_get_search_kebutuhan_khusus';
const SP_GET_LEMBAGA_PENGANGKAT_ALL  = 'sp_get_lembaga_pengangkat_all';
const SP_GET_STATUS_KEPEGAWAIAN_ALL = 'sp_get_status_kepegawaian_all';
const SP_GET_SUMBER_GAJI_ALL = 'sp_get_sumber_gaji_all';
const SP_GET_DESA_KELURAHAN_ALL = 'sp_get_wilayah_desa_kelurahan_by_Kecamatan';
const SP_GET_KECAMATAN_ALL = 'sp_get_wilayah_kecamatan_by_kabupaten';
const SP_GET_KABUPATEN_ALL = 'sp_get_wilayah_search_kabupaten';
const SP_GET_REF_ALL    = 'sp_get_ref_all';
const SP_GET_WILAYAH_BY_WILAYAH    = 'sp_get_wilayah_search_wilayah';
const SP_GET_AGAMA_BY_ID    = 'sp_get_agama_by_id';
const SP_GET_JENIS_PTK_BY_ID    = 'sp_get_jenis_ptk_by_id';
const SP_GET_KEBUTUHAN_KHUSUS_BY_ID    = 'sp_get_kebutuhan_khusus_by_id';
const SP_GET_LEMBAGA_PENGANGKAT_BY_ID    = 'sp_get_lembaga_pengangkat_by_id';
const SP_GET_STATUS_KEPEGAWAIAN_BY_ID    = 'sp_get_status_kepegawaian_by_id';
const SP_GET_SUMBER_GAJI_BY_ID    = 'sp_get_sumber_gaji_by_id';
const SP_GET_SEKOLAH     = 'sp_get_wilayah_search_sekolah';
const SP_GET_JABATAN_TUGAS_PTK ='sp_get_jenis_jabatan_ptk_all';
const SP_GET_DETAIL_NEGARA = 'sp_get_detail_referensi_negara';
const SP_GET_PEKERJAAN ='sp_get_referensi_pekerjaan_all';






var sp = {
    SP_PEREKAMAN_PTK,
    SP_GET_AGAMA_ALL,
    SP_GET_JENIS_PTK_ALL,
    SP_GET_KEBUTUHAN_KHUSUS_ALL,
    SP_GET_KEBUTUHAN_KHUSUS_BY_NAMA,
    SP_GET_LEMBAGA_PENGANGKAT_ALL,
    SP_GET_STATUS_KEPEGAWAIAN_ALL,
    SP_GET_SUMBER_GAJI_ALL,
    SP_GET_DESA_KELURAHAN_ALL,
    SP_GET_KECAMATAN_ALL,
    SP_GET_KABUPATEN_ALL,
    SP_GET_REF_ALL,
    SP_GET_WILAYAH_BY_WILAYAH,
    SP_GET_AGAMA_BY_ID,
    SP_GET_JENIS_PTK_BY_ID,
    SP_GET_KEBUTUHAN_KHUSUS_BY_ID,
    SP_GET_LEMBAGA_PENGANGKAT_BY_ID,
    SP_GET_STATUS_KEPEGAWAIAN_BY_ID,
    SP_GET_SUMBER_GAJI_BY_ID,
    SP_GET_SEKOLAH,
    SP_GET_JABATAN_TUGAS_PTK,
    SP_GET_DETAIL_NEGARA,
    SP_GET_PEKERJAAN,
    
    
};

module.exports = sp;
