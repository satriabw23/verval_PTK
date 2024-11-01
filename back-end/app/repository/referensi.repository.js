'use strict'

const pool = require("../../config/database")
const poolConnect = pool.connect()
const SP_NAME = require("../constants/stored-procedure")

const agama = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_AGAMA_ALL);

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

const jenisPtk = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_JENIS_PTK_ALL);

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
const kebutuhanKhusus = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .input('kebutuhan_khusus', params.kebutuhan_khusus)
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_KEBUTUHAN_KHUSUS_BY_NAMA);

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
const pekerjaan = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_PEKERJAAN);

            const res = {
                status_code: result.output.status_code,
                message: result.output.message,
                data: (result.recordset) ? result.recordset : []
            }
            return res
        } catch (err) {
            console.error('Error executing stored procedure:', err);
            throw err
        }
};
const lembagaPengangkat = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_LEMBAGA_PENGANGKAT_ALL);

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
const jabatantugasPTK = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_JABATAN_TUGAS_PTK);

            const res = {
                status_code: result.output.status_code,
                message: result.output.message,
                data: (result.recordset) ? result.recordset : []
            }
            return res
        } catch (err) {
            console.error('Error executing stored procedure:', err);
            throw err
        }
};
const statusKepegawaian = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_STATUS_KEPEGAWAIAN_ALL);

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
const sumberGaji = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_SUMBER_GAJI_ALL);

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
const desaKelurahan = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .input('mst_kode_wilayah', params.mst_kode_wilayah)
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_DESA_KELURAHAN_ALL);

            const res = {
                status_code: result.output.status_code,
                message: result.output.message,
                data: (result.recordset && result.recordset.length > 100) 
                    ? result.recordset.slice(0, 100) 
                    : result.recordset
            };
            return res
        } catch (err) {
            throw err
        }
}
const kecamatan = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .input('mst_kode_wilayah', params.mst_kode_wilayah)
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_KECAMATAN_ALL);

        const res = {
            status_code: result.output.status_code,
            message: result.output.message,
            data: (result.recordset && result.recordset.length > 100) 
                ? result.recordset.slice(0, 100) 
                : result.recordset
        };
        return res;
    } catch (err) {
        throw err;
    }
};
const kabupaten = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .input('nama', params.nama)
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_KABUPATEN_ALL);

            const res = {
                status_code: result.output.status_code,
                message: result.output.message,
                data: (result.recordset) ? result.recordset : []
            }
            return res
        } catch (err) {
            throw err
        }
};
const wilayah = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .input('nama', params.nama)
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_WILAYAH_BY_WILAYAH);

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
const allData = async (params) => {
    await poolConnect;
    try {

        const request = pool.request();
        const result = await request
            .input ('table_name', params.table_name)
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_REF_ALL);

            const res = {
                status_code: result.output.status_code,
                message: result.output.message,
                data: (result.recordset) ? result.recordset : []
            }
            return res
        } catch (err) {
            throw err
        }
};
const agamaByid = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .input('agama_id', params.agama_id)
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_AGAMA_BY_ID);

            const res = {
                status_code: result.output.status_code,
                message: result.output.message,
                data: (result.recordset) ? result.recordset : []
            }
            return res
        } catch (err) {
            throw err
        }
};
const jenisPtkbyId = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .input('jenis_ptk_id', params.jenis_ptk_id)
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_JENIS_PTK_BY_ID);

            const res = {
                status_code: result.output.status_code,
                message: result.output.message,
                data: (result.recordset) ? result.recordset : []
            }
            return res
        } catch (err) {
            throw err
        }
};
const kebutuhankhususById = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .input('kebutuhan_khusus_id', params.kebutuhan_khusus_id)
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_KEBUTUHAN_KHUSUS_BY_ID);

            const res = {
                status_code: result.output.status_code,
                message: result.output.message,
                data: (result.recordset) ? result.recordset : []
            }
            return res
        } catch (err) {
            console.error('Error executing stored procedure:', err);
            throw err
        }
};
const lembagapengangkatById = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .input('lembaga_pengangkat_id', params.lembaga_pengangkat_id)
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_LEMBAGA_PENGANGKAT_BY_ID);

            const res = {
                status_code: result.output.status_code,
                message: result.output.message,
                data: (result.recordset) ? result.recordset : []
            }
            return res
        } catch (err) {
            console.error('Error executing stored procedure:', err);
            throw err
        }
};
const statuskepegawaianById = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .input('status_kepegawaian_id', params.status_kepegawaian_id)
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_STATUS_KEPEGAWAIAN_BY_ID);

            const res = {
                status_code: result.output.status_code,
                message: result.output.message,
                data: (result.recordset) ? result.recordset : []
            }
            return res
        } catch (err) {
            console.error('Error executing stored procedure:', err);
            throw err
        }
};
const sumbergajiById = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .input('sumber_gaji_id', params.sumber_gaji_id)
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_SUMBER_GAJI_BY_ID);

            const res = {
                status_code: result.output.status_code,
                message: result.output.message,
                data: (result.recordset) ? result.recordset : []
            }
            return res
        } catch (err) {
            console.error('Error executing stored procedure:', err);
            throw err
        }
};
const sekolahByWilayah = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .input('nama', params.nama)
            .input('kode_wilayah', params.kode_wilayah)
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_SEKOLAH);

            const res = {
                status_code: result.output.status_code,
                message: result.output.message,
                data: (result.recordset) ? result.recordset : []
            }
            return res
        } catch (err) {
            console.error('Error executing stored procedure:', err);
            throw err
        }
};
const detailNegara = async (params) => {
    await poolConnect;
    try {
        const request = pool.request();
        const result = await request
            .input('negara_id', params.negara_id)
            .output('status_code')
            .output('message')
            .execute(SP_NAME.SP_GET_DETAIL_NEGARA);

            const res = {
                status_code: result.output.status_code,
                message: result.output.message,
                data: (result.recordset) ? result.recordset : []
            }
            return res
        } catch (err) {
            console.error('Error executing stored procedure:', err);
            throw err
        }
};


const repository ={
    agama,
    jenisPtk,
    kebutuhanKhusus,
    lembagaPengangkat,
    statusKepegawaian,
    sumberGaji,
    desaKelurahan,
    kecamatan,
    kabupaten,
    allData,
    wilayah,
    agamaByid,
    jenisPtkbyId,
    kebutuhankhususById,
    lembagapengangkatById,
    statuskepegawaianById,
    sumbergajiById,
    sekolahByWilayah,
    jabatantugasPTK,
    detailNegara,
    pekerjaan,
}

module.exports = repository