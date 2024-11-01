'use strict'

const pool = require("../../config/database")
const poolConnect = pool.connect()
const SP_NAME = require("../constants/stored-procedure")

const perekamanPTK = async (params) => {
    
    await poolConnect
    try {
        const request = pool.request()
        const result = await request
            .input('nik', params.nik)
            .input('nama', params.nama)
            .input('tempat_lahir', params.tempat_lahir)
            .input('tanggal_lahir', params.tanggal_lahir)
            .input('jenis_kelamin', params.jenis_kelamin)
            .input('nama_ibu_kandung', params.nama_ibu_kandung)
            .input('agama_id', params.agama_id)
            .input('kebutuhan_khusus_id', params.kebutuhan_khusus_id)
            .input('status_perkawinan', params.status_perkawinan)
            .input('email', params.email)
            .input('alamat_jalan', params.alamat_jalan)
            .input('rt', params.rt)
            .input('rw', params.rw)
            .input('kode_wilayah', params.kode_wilayah)
            .input('kode_pos', params.kode_pos)
            .input('jenis_ptk_id', params.jenis_ptk_id)
            .input('jabatan_ptk_id', params.jabatan_ptk_id)
            .input('status_kepegawaian_id', params.status_kepegawaian_id)
            .input('nip', params.nip)
            .input('lembaga_pengangkat_id', params.lembaga_pengangkat_id)
            .input('sk_pengangkatan', params.sk_pengangkatan)
            .input('tmt_pengangkatan', params.tmt_pengangkatan)
            .input('sumber_gaji_id', params.sumber_gaji_id)
            .input('sudah_lisensi_kepala_sekolah', params.sudah_lisensi_kepala_sekolah)
            .input('sekolah_id', params.sekolah_id)
            .input('nomor_surat_tugas', params.nomor_surat_tugas)
            .input('tgl_surat_tugas', params.tgl_surat_tugas)
            .input('tmt_tugas', params.tmt_tugas)
            .input('kewarganegaraan', params.kewarganegaraan)
            .input('status_keaktifan_id', params.status_keaktifan_id)
            .input('pekerjaan_suami_istri', params.pekerjaan_suami_istri)
            .input('soft_delete', params.soft_delete)
            .input('jenis_keluar_id', params.jenis_keluar_id)
            .input('tgl_ptk_keluar', params.tgl_ptk_keluar)
            .input('ptk_induk', params.ptk_induk)
            .input('aktif_bulan_01', params.aktif_bulan_01)
            .input('aktif_bulan_02', params.aktif_bulan_02)
            .input('aktif_bulan_03', params.aktif_bulan_03)
            .input('aktif_bulan_04', params.aktif_bulan_04)
            .input('aktif_bulan_05', params.aktif_bulan_05)
            .input('aktif_bulan_06', params.aktif_bulan_06)
            .input('aktif_bulan_07', params.aktif_bulan_07)
            .input('aktif_bulan_08', params.aktif_bulan_08)
            .input('aktif_bulan_09', params.aktif_bulan_09)
            .input('aktif_bulan_10', params.aktif_bulan_10)
            .input('aktif_bulan_11', params.aktif_bulan_11)
            .input('aktif_bulan_12', params.aktif_bulan_12)
            .input('status_approval', params.status_approval)
            .input('approval_date', params.approval_date)
            .input('keterangan', params.keterangan)
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_PEREKAMAN_PTK)
        const res = {
            status_code: result.output.status_code,
            message: result.output.message,
            data: (result.recordset) ? result.recordset : []
        }
        return res
    } catch (err) {
        throw err
    }
}
const repository = {
    perekamanPTK
}

module.exports = repository