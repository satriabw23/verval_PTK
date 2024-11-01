'use strict'

const status_code = {
    success: 200,
    no_content: 201,
    bad_request: 400,
    unauthorized: 401,
    forbidden: 403,
    internal_server_error: 500
}

const message = {
    success: "Sukses.",
    no_content: "Data tidak ditemukan.",
    bad_request: "Request tidak valid, silahkan periksa request yang di kirim.",
    unauthorized: "Authentikasi tidak valid",
    forbidden: "Anda tidak berhak mengakses halaman ini.",
    internal_server_error: "Terjadi permasalahan pada server."
}

const HTTP_STATUS = {
    status_code,
    message
}

module.exports = HTTP_STATUS