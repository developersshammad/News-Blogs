$(document).ready(function() {
    // Dummy data for articles
    const articles = [
        {
            id: 1,
            title: "The Future of AI in Technology",
            excerpt: "Exploring how artificial intelligence is shaping the future of various industries.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "technology",
            tags: ["AI", "Future", "Innovation"],
            date: "2023-10-01",
            author: "John Doe",
            content: "Artificial intelligence (AI) is revolutionizing the way we live and work. From self-driving cars to personalized medicine, AI is making significant impacts across industries. In this article, we explore the latest developments and what the future holds for AI technology."
        },
        {
            id: 2,
            title: "Top 10 Healthy Eating Habits",
            excerpt: "Discover the best practices for maintaining a healthy diet and lifestyle.",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "health",
            tags: ["Health", "Nutrition", "Lifestyle"],
            date: "2023-09-28",
            author: "Jane Smith",
            content: "Eating healthy is crucial for maintaining good health and preventing diseases. Here are the top 10 habits that can help you achieve a balanced diet and improve your overall well-being."
        },
        {
            id: 3,
            title: "Championship Highlights: Team Victory",
            excerpt: "Relive the exciting moments from the recent championship game.",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "sports",
            tags: ["Sports", "Championship", "Victory"],
            date: "2023-09-25",
            author: "Mike Johnson",
            content: "The championship game was filled with drama and excitement. Our team fought hard to secure the victory, showcasing incredible skill and determination throughout the match."
        },
        {
            id: 4,
            title: "Exploring Hidden Gems in Europe",
            excerpt: "Uncover lesser-known destinations that offer unique travel experiences.",
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "travel",
            tags: ["Travel", "Europe", "Hidden Gems"],
            date: "2023-09-20",
            author: "Sarah Wilson",
            content: "Europe is home to many popular tourist spots, but there are also hidden gems waiting to be discovered. In this article, we highlight some off-the-beaten-path destinations that offer authentic and memorable experiences."
        },
        {
            id: 5,
            title: "Sustainable Living: Small Changes, Big Impact",
            excerpt: "Learn how small lifestyle changes can contribute to a more sustainable future.",
            image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "health",
            tags: ["Sustainability", "Environment", "Lifestyle"],
            date: "2023-09-15",
            author: "Emma Green",
            content: "Sustainability is more important than ever. This article discusses practical steps individuals can take to reduce their environmental footprint and live more sustainably."
        },
        {
            id: 6,
            title: "The Rise of Electric Vehicles",
            excerpt: "An in-depth look at the growing popularity and future of electric cars.",
            image: "https://www.bls.gov/opub/btn/volume-12/images/electric-vehicles-main-image.jpg",
            category: "technology",
            tags: ["Electric Vehicles", "Sustainability", "Transportation"],
            date: "2023-09-10",
            author: "Alex Chen",
            content: "Electric vehicles are transforming the automotive industry. From Tesla to traditional manufacturers, EVs are becoming more accessible and efficient."
        },
        {
            id: 7,
            title: "Mental Health Awareness in the Workplace",
            excerpt: "How companies are prioritizing employee mental health and well-being.",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "health",
            tags: ["Mental Health", "Workplace", "Well-being"],
            date: "2023-09-05",
            author: "Lisa Brown",
            content: "Mental health in the workplace is a critical issue. This article explores initiatives companies are taking to support their employees' mental well-being."
        },
        {
            id: 8,
            title: "Adventure Travel: Thrilling Destinations",
            excerpt: "Discover adrenaline-pumping travel experiences around the world.",
            image: "https://vibegetaways.com/wp-content/uploads/2023/10/adventure-travel.webp",
            category: "travel",
            tags: ["Adventure", "Travel", "Thrill"],
            date: "2023-08-30",
            author: "Tom Adventure",
            content: "For those seeking excitement, adventure travel offers unforgettable experiences. From mountain climbing to deep-sea diving, explore the world's most thrilling destinations."
        },
        {
            id: 9,
            title: "The Evolution of Social Media",
            excerpt: "Tracing the history and impact of social media on society.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "technology",
            tags: ["Social Media", "Internet", "Society"],
            date: "2023-08-25",
            author: "Rachel Digital",
            content: "Social media has changed the way we communicate and share information. This article examines its evolution and ongoing influence on our daily lives."
        },
        {
            id: 10,
            title: "Olympic Games: A Celebration of Human Achievement",
            excerpt: "The history and significance of the world's largest sporting event.",
            image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
            category: "sports",
            tags: ["Olympics", "Sports", "Achievement"],
            date: "2023-08-20",
            author: "David Athlete",
            content: "The Olympic Games bring together athletes from around the world to compete in a spirit of excellence and friendship. Learn about its rich history and global impact."
        }
    ];

    let currentPage = 1;
    const articlesPerPage = 6;
    let filteredArticles = articles;

    // Function to render articles
    function renderArticles(articlesToRender, container, append = false) {
        if (!append) container.empty();
        articlesToRender.forEach((article, index) => {
            const tagsHtml = article.tags ? article.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : '';
            const card = `
                <div class="col-md-4 mb-4 article-card" style="animation-delay: ${index * 0.1}s">
                    <div class="card h-100">
                        <img src="${article.image}" class="card-img-top" alt="${article.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.excerpt}</p>
                            <div class="tags">${tagsHtml}</div>
                            <p class="text-muted small">By ${article.author} | ${article.date}</p>
                            <div class="mt-auto">
                                <button class="btn btn-primary me-2 preview-btn" data-id="${article.id}">Preview</button>
                                <a href="article.html?id=${article.id}" class="btn btn-outline-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.append(card);
        });
    }

    // Function to render pagination
    function renderPagination() {
        const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
        const paginationContainer = $('#pagination');
        paginationContainer.empty();

        if (totalPages <= 1) return;

        const prevBtn = `<li class="page-item ${currentPage === 1 ? 'disabled' : ''}"><a class="page-link" href="#" data-page="${currentPage - 1}">Previous</a></li>`;
        paginationContainer.append(prevBtn);

        for (let i = 1; i <= totalPages; i++) {
            const activeClass = i === currentPage ? 'active' : '';
            const pageBtn = `<li class="page-item ${activeClass}"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`;
            paginationContainer.append(pageBtn);
        }

        const nextBtn = `<li class="page-item ${currentPage === totalPages ? 'disabled' : ''}"><a class="page-link" href="#" data-page="${currentPage + 1}">Next</a></li>`;
        paginationContainer.append(nextBtn);
    }

    // Load articles for current page
    function loadArticles() {
        const startIndex = (currentPage - 1) * articlesPerPage;
        const endIndex = startIndex + articlesPerPage;
        const articlesToLoad = filteredArticles.slice(startIndex, endIndex);
        renderArticles(articlesToLoad, $('#articles'));
        renderPagination();
        updateLoadMoreButton();
    }

    // Update Load More button visibility (removed for homepage)
    function updateLoadMoreButton() {
        // Load More button removed from homepage
    }

    // Load more articles (append) - removed from all pages

    // Handle pagination clicks
    $(document).on('click', '.page-link', function(e) {
        e.preventDefault();
        const page = parseInt($(this).data('page'));
        if (page && page !== currentPage && page >= 1 && page <= Math.ceil(filteredArticles.length / articlesPerPage)) {
            currentPage = page;
            loadArticles();
            $('html, body').animate({scrollTop: 0}, 500);
        }
    });

    // Search functionality
    $('#search-input').on('input', function() {
        const query = $(this).val().toLowerCase();
        filteredArticles = articles.filter(article =>
            article.title.toLowerCase().includes(query) ||
            article.excerpt.toLowerCase().includes(query) ||
            article.tags.some(tag => tag.toLowerCase().includes(query))
        );
        currentPage = 1;
        loadArticles();
    });

    // Preview article in modal
    $(document).on('click', '.preview-btn', function() {
        const articleId = $(this).data('id');
        const article = articles.find(a => a.id === articleId);
        $('#modal-title').text(article.title);
        $('#modal-body').html(`
            <img src="${article.image}" class="img-fluid mb-3" alt="${article.title}">
            <p>${article.excerpt}</p>
            <p class="text-muted">By ${article.author} | ${article.date}</p>
        `);
        $('#articleModal').modal('show');
    });

    // Scroll to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });

    $('#scroll-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 800);
    });

    // Handle category page
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('cat');
    if (category) {
        const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
        $('#category-title').text(categoryName);
        filteredArticles = articles.filter(a => a.category === category);
        currentPage = 1;
        loadArticles();

        // Update SEO meta tags for category page
        const categoryUrl = `https://newsblogs.com/category.html?cat=${category}`;
        const categoryTitle = `${categoryName} Articles - News & Blogs`;
        const categoryDescription = `Explore the latest ${categoryName.toLowerCase()} articles on News & Blogs. Stay updated with technology, sports, health, and travel news.`;
        const categoryKeywords = `${categoryName.toLowerCase()}, news, blogs, articles, ${categoryName.toLowerCase()} news`;

        // Update title and meta tags
        document.title = categoryTitle;
        $('#category-page-title').text(categoryTitle);
        $('#category-description').attr('content', categoryDescription);
        $('#category-keywords').attr('content', categoryKeywords);
        $('#category-canonical').attr('href', categoryUrl);

        // Update Open Graph tags
        $('#category-og-url').attr('content', categoryUrl);
        $('#category-og-title').attr('content', categoryTitle);
        $('#category-og-description').attr('content', categoryDescription);

        // Update Twitter tags
        $('#category-twitter-url').attr('content', categoryUrl);
        $('#category-twitter-title').attr('content', categoryTitle);
        $('#category-twitter-description').attr('content', categoryDescription);
    } else {
        // Load initial articles on homepage
        loadArticles();
    }

    // Handle single article page
    const articleId = urlParams.get('id');
    if (articleId) {
        const article = articles.find(a => a.id == articleId);
        if (article) {
            $('#article-title').text(article.title);
            $('#article-date').text(article.date);
            $('#article-category').text(article.category);
            $('#article-image').attr('src', article.image);
            $('#article-content').html(`<p>${article.content}</p>`);
            const tagsHtml = article.tags ? article.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : '';
            $('#article-tags').html(tagsHtml);

            // Update SEO meta tags dynamically
            const articleUrl = `https://newsblogs.com/article.html?id=${articleId}`;
            const articleTitle = `${article.title} - News & Blogs`;
            const articleDescription = article.excerpt;
            const articleKeywords = article.tags ? article.tags.join(', ') + ', news, blogs' : 'news, blogs';
            const publishedTime = new Date(article.date).toISOString();

            // Update title and meta tags
            document.title = articleTitle;
            $('#page-title').text(articleTitle);
            $('#page-description').attr('content', articleDescription);
            $('#page-keywords').attr('content', articleKeywords);
            $('#canonical-url').attr('href', articleUrl);

            // Update Open Graph tags
            $('#og-url').attr('content', articleUrl);
            $('#og-title').attr('content', articleTitle);
            $('#og-description').attr('content', articleDescription);
            $('#og-image').attr('content', article.image);
            $('#article-published-time').attr('content', publishedTime);
            $('#article-author').attr('content', article.author);

            // Update Twitter tags
            $('#twitter-url').attr('content', articleUrl);
            $('#twitter-title').attr('content', articleTitle);
            $('#twitter-description').attr('content', articleDescription);
            $('#twitter-image').attr('content', article.image);

            // Update JSON-LD structured data
            const structuredData = {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": article.title,
                "description": article.excerpt,
                "image": article.image,
                "datePublished": publishedTime,
                "dateModified": publishedTime,
                "author": {
                    "@type": "Person",
                    "name": article.author
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "News & Blogs",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    }
                },
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": articleUrl
                },
                "articleSection": article.category,
                "keywords": article.tags ? article.tags.join(', ') : ''
            };
            $('#article-structured-data').text(JSON.stringify(structuredData, null, 2));
        }
    }

    // Handle comments (front-end only)
    let comments = JSON.parse(localStorage.getItem('comments')) || {};

    function renderComments() {
        const articleComments = comments[articleId] || [];
        $('#comments').empty();
        articleComments.forEach(comment => {
            $('#comments').append(`
                <div class="comment">
                    <div class="comment-author">${comment.name}</div>
                    <div class="comment-date">${comment.date}</div>
                    <div class="comment-text">${comment.text}</div>
                </div>
            `);
        });
    }

    if (articleId) {
        renderComments();
    }

    $('#comment-form').submit(function(e) {
        e.preventDefault();
        const name = $('#comment-name').val();
        const text = $('#comment-text').val();
        const date = new Date().toLocaleDateString();
        if (!comments[articleId]) {
            comments[articleId] = [];
        }
        comments[articleId].push({name, text, date});
        localStorage.setItem('comments', JSON.stringify(comments));
        renderComments();
        $('#comment-name').val('');
        $('#comment-text').val('');
    });
});
