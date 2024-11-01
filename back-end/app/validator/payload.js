'use strict'

const HTTP_METHOD = require("../constants/http-method");

const PAYLOAD_VALIDATOR_DATA = [
    {
        app_route: 'perekaman',
        url: 'perekaman-ptk',
        method: HTTP_METHOD.POST,
        body: [
            { nama: 'nik' },
            { nama: 'nama' },
            { nama: 'tempat_lahir' },
            { nama: 'tanggal_lahir' },
            { nama: 'jenis_kelamin' },
            { nama: 'nama_ibu_kandung' },
            { nama: 'agama_id' },
            { nama: 'kebutuhan_khusus_id' },
            { nama: 'status_perkawinan' },
            { nama: 'email' },
            { nama: 'kewarganegaraan' },
            { nama: 'alamat_jalan' },
            { nama: 'rt' },
            { nama: 'rw' },
            { nama: 'kode_wilayah' },
            { nama: 'kode_pos' },
            { nama: 'jenis_ptk_id' },
            { nama: 'jabatan_ptk_id' },
            { nama: 'status_kepegawaian_id' },
            { nama: 'nip' },
            { nama: 'lembaga_pengangkat_id' },
            { nama: 'sk_pengangkatan' },
            { nama: 'tmt_pengangkatan' },
            { nama: 'sumber_gaji_id' },
            { nama: 'sudah_lisensi_kepala_sekolah' },
            { nama: 'sekolah_id'} ,
            { nama: 'nomor_surat_tugas' },
            { nama: 'tgl_surat_tugas' },
            { nama: 'tmt_tugas' },
            { nama: 'status_keaktifan_id' },
            { nama: 'pekerjaan_suami_istri' },
            { nama: 'soft_delete' },
            { nama: 'jenis_keluar_id' },
            { nama: 'tgl_ptk_keluar' },
            { nama: 'ptk_induk' },
            { nama: 'aktif_bulan_01' },
            { nama: 'aktif_bulan_02' },
            { nama: 'aktif_bulan_03' },
            { nama: 'aktif_bulan_04' },
            { nama: 'aktif_bulan_05' },
            { nama: 'aktif_bulan_06' },
            { nama: 'aktif_bulan_07' },
            { nama: 'aktif_bulan_08' },
            { nama: 'aktif_bulan_09' },
            { nama: 'aktif_bulan_10' },
            { nama: 'aktif_bulan_11' },
            { nama: 'aktif_bulan_12' },
            { nama: 'status_approval' },
            { nama: 'approval_date' },
            { nama: 'keterangan' },
        ]
    }, 
    {
        app_route: 'referensi',
        url: 'get-agama',
        method: HTTP_METHOD.GET,
        body: []
    },
    {
        app_route: 'referensi',
        url: 'get-detail-agama',
        method: HTTP_METHOD.GET,
        params: [
            { nama: 'agama_id' } 
        ]
    },
    {
        app_route: 'referensi',
        url: 'get-jenis-ptk',
        method: HTTP_METHOD.GET,
        body: []
    },
    {
        app_route: 'referensi',
        url: 'get-kebutuhan-khusus',
        method: HTTP_METHOD.GET,
        params: [
            {nama: 'kebutuhan_khusus'}
        ]
    },
    {
        app_route: 'referensi',
        url: 'get-lembaga-pengangkat',
        method: HTTP_METHOD.GET,
        body: []
    },
    {
        app_route: 'referensi',
        url: 'get-status-kepegawaian',
        method: HTTP_METHOD.GET,
        body: []
    },
    {
        app_route: 'referensi',
        url: 'get-sumber-gaji',
        method: HTTP_METHOD.GET,
        body: []
    },
    {
        app_route: 'referensi',
        url: 'get-desa-kelurahan',
        method: HTTP_METHOD.GET,
        params: [
            {nama: 'mst_kode_wilayah'}
        ]
    },
    {
        app_route: 'referensi',
        url: 'get-kecamatan',
        method: HTTP_METHOD.GET,
        params: [
            {nama: 'mst_kode_wilayah'}
        ]
    },
    {
        app_route: 'referensi',
        url: 'get-kabupaten',
        method: HTTP_METHOD.GET,
        params: [
            {nama: 'nama'}
        ]
    },
    {
        app_route: 'referensi',
        url: 'get-wilayah',
        method: HTTP_METHOD.GET,
        params: [
            {nama: 'nama'}
        ]
    },
    {
        app_route: 'referensi',
        url: 'get-reff-all',
        method: HTTP_METHOD.POST,
        params: [
            {nama: 'table_name'}
        ]
    },
    {
        app_route: 'referensi',
        url: 'get-pekerjaan',
        method: HTTP_METHOD.GET,
        params: []
    },
    {
        app_route: 'referensi',
        url: 'get-agama-by-id',
        method: HTTP_METHOD.GET,
        params: [
            { nama: 'agama_id' } 
        ]
    },
    {
        app_route: 'referensi',
        url: 'get-jenis-ptk-by-id',
        method: HTTP_METHOD.GET,
        params: [
            { nama: 'jenis_ptk_id' } 
        ]
    },
    {
        app_route: 'referensi',
        url: 'get-kebutuhan-khusus-by-id',
        method: HTTP_METHOD.GET,
        params: [
            { nama: 'kebutuhan_khusus_id' } 
        ]
    },
    {
        app_route: 'referensi',
        url: 'get-lembaga-pengangkat-by-id',
        method: HTTP_METHOD.GET,
        params: [
            { nama: 'lembaga_pengangkat_id' } 
        ]
    },
    {
        app_route: 'referensi',
        url: 'get-status-kepegawaian-by-id',
        method: HTTP_METHOD.GET,
        params: [
            { nama: 'status_kepegawaian_id' } 
        ]
    },
    {
        app_route: 'referensi',
        url: 'get-sumber-gaji-by-id',
        method: HTTP_METHOD.GET,
        params: [
            { nama: 'sumber_gaji_id' } 
        ]
    },
    {
        app_route: 'referensi',
        url: 'get-sekolah-by-nama',
        method: HTTP_METHOD.GET,
        params: [
            { nama: 'nama' },
            { nama: 'kode_wilayah' }
        ]
    },
    {
        app_route: 'referensi',
        url: 'get-jabatan-tugas-ptk',
        method: HTTP_METHOD.GET,
        body: []
    },
    {
        app_route: 'referensi',
        url: 'get-detail-negara',
        method: HTTP_METHOD.GET,
        params: [
            { nama: 'negara_id' }
        ]
    },
    
    
]

module.exports = PAYLOAD_VALIDATOR_DATA;