/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        client_jwt_key: "e90bdd9c172be7469f5e90241722e73b", // quoicoubeh md5
        public_domaine_bucket_url: "https://storage.thomas-biabiany.fr/",
        HOST: "www.thomas-biabiany.fr",
    }
}

module.exports = nextConfig
