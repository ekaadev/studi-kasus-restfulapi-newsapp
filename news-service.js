export class NewsService {

    news = [
        {
            title: "Rust Lagi Naik Daun",
            description: "Rust adalah bahasa pemrograman yang memiliki performa yang tinggi."
        },
        {
            title: "Svelte vs React",
            description: "Svelte adalah framework yang lagi populer di tahun 2024"
        }
    ]

    getJsonNews() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.news.map((value, index) => {
                return {
                    id: index,
                    title: value.title,
                    description: value.description,
                }
            })
        });
    }

    getAllNews(req, res) {
        res.write(this.getJsonNews());
        res.end();
    }

    createNews(req, res) {

        req.on('data', (data) => {
            const value = JSON.parse(data.toString());
            this.news.push(value);

            res.write(this.getJsonNews());
            res.end()
        });

    }

    updateNews(req, res) {

        req.on('data', (data) => {
            const value = JSON.parse(data.toString());

            if (this.news[value.id]) {
                this.news[value.id] = value;
            }

            res.write(this.getJsonNews());
            res.end()
        });

    }

    deleteNews(req, res) {

        req.on('data', (data) => {
            const value = JSON.parse(data.toString());

            if (this.news[value.id]) {
                this.news.splice(value.id, 1);
            }

            res.write(this.getJsonNews());
            res.end();
        });

    }
}