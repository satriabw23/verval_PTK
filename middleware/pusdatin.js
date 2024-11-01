'use strict'
const axios = require('axios');

const autentikasi = async () => {
    try {
        const getToken = await axios.get(process.env.PUSDATIN_MAIN_URL + '/authenticate/authenticateV2/', {
            auth: {
                username: process.env.PUSDATIN_USERNAME,
                password: process.env.PUSDATIN_PASSWORD
            }
        });
        return getToken.data;
    } catch (ex) {
        const data = {
            status_code: 400,
            message: 'Tidak bisa terkoneksi dengan API Validasi Autentikasi',
            data: {}
        }
        return data;
    }
}

const dukcapil = async (params, token) => {
    try {
        var tanggal_lahir = new Date(params.tanggal_lahir);
        var jenis_kelamin = "Laki-Laki";
        if (params.jenis_kelamin == "P") {
            jenis_kelamin = "Perempuan";
        }
        const getData = await axios.post(process.env.PUSDATIN_MAIN_URL + '/kemdagri/verifikasiDukcapil/', {
            username: process.env.PUSDATIN_DUKCAPIL_USERNAME,
            password: process.env.PUSDATIN_DUKCAPIL_PASSWORD,
            nik: params.nik,
            nama: params.nama,
            jenis_kelamin: jenis_kelamin,
            tempat_lahir: params.tempat_lahir,
            tanggal_lahir: String(tanggal_lahir.getDate()).padStart(2, '0') + '-' + String(tanggal_lahir.getMonth() + 1).padStart(2, '0') + '-' + tanggal_lahir.getFullYear(),
            nama_ibu_kandung: params.nama_ibu_kandung,
            status_code: 0,
            message: null
        }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });


        if (getData.data) {
            const kembalian = {
                nik: getData.data[0]['nik'].replace('Tidak Sesuai', '0').replace('Sesuai', '100'),
                nomor_kk: getData.data[0]['nomor_kk'].replace('Tidak Sesuai', '0').replace('Sesuai', '100'),
                tanggal_kk: getData.data[0]['tanggal_kk'],
                nama: getData.data[0]['nama'].replace('Tidak Sesuai (', '').replace('Sesuai (', '').replace(')', ''),
                jenis_kelamin: getData.data[0]['jenis_kelamin'].replace('Tidak Sesuai', '0').replace('Sesuai', '100'),
                tempat_lahir: getData.data[0]['tempat_lahir'].replace('Tidak Sesuai (', '').replace('Sesuai (', '').replace(')', ''),
                tanggal_lahir: getData.data[0]['tanggal_lahir'].replace('Tidak Sesuai', '0').replace('Sesuai', '100'),
                nama_ibu_kandung: getData.data[0]['nama_ibu_kandung'].replace('Tidak Sesuai (', '').replace('Sesuai (', '').replace(')', ''),
                alamat: getData.data[0]['alamat'].replace('Tidak Sesuai (', '').replace('Sesuai (', '').replace(')', ''),
                desa_kelurahan: getData.data[0]['desa_kelurahan'],
                kecamatan: getData.data[0]['kecamatan'],
                kabupaten: getData.data[0]['kabupaten'],
                provinsi: getData.data[0]['provinsi']
            }

            const data = {
                status_code: 200,
                message: 'Data berhasil ditemukan',
                data: kembalian
            }

            return data;
        } else {
            const data = {
                status_code: getData.data[0]['nik'].replace('Tidak Sesuai', '0').replace('Sesuai', '100') === "100" ? 200 : 400,
                message: getData.data[0]['nik'].replace('Tidak Sesuai', '0').replace('Sesuai', '100') === "100" ? 'Data ditemukan' : 'Data tidak ditemukan',
                data: {}
            }
            return data;
        }
    } catch (ex) {
        const data = {
            status_code: 500,
            message: 'Tidak bisa terkoneksi dengan API Validasi Dukcapil '.concat(ex),
            data: {}
        }
        return data;
    }
}

const dtks = async (req, token) => {
    try {
        const getData = await axios.post(process.env.PUSDATIN_MAIN_URL + '/kemensos/verifikasiDtks/', {
            nik: params.nik,
            status_code: 0,
            message: null
        }, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });

        if (parseInt(getData.data.statusCode) === 200) {
            if (distance(getData.data.data.nama.toUpperCase(), req.nama.toUpperCase()) >= 0.90 & getData.data.data.Aktif_DTKS.toString() === "1" & (getData.data.data.keluarga_PKH.toString() === "1" || getData.data.data.keluarga_BPNT.toString() === "1" || getData.data.data.Anggota_PBI.toString() === "1" || getData.data.data.aktif_PKH.toString() === "1")) {
                await service.akunUbahFlagDtks(req);
            }
        }
    } catch (ex) {
        const data = {
            status_code: 500,
            message: 'Tidak bisa terkoneksi dengan API Validasi DTKS'.concat(ex),
            data: {}
        }
        return JSON.stringify(data);
    }
}

const pusdatin = {
    autentikasi,
    dukcapil,
    dtks
}

module.exports = pusdatin