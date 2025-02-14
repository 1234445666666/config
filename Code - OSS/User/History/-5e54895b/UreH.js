document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    let currentIndex = 0;
    let itemWidth;
    let itemsPerView;

    function updateItemWidth() {
        const viewportWidth = window.innerWidth;
        if (viewportWidth > 1024) {
            itemsPerView = 3;
        } else if (viewportWidth > 640) {
            itemsPerView = 2;
        } else {
            itemsPerView = 1;
        }
        
        itemWidth = track.clientWidth / itemsPerView;
        items.forEach(item => {
            item.style.minWidth = `${itemWidth}px`;
        });
    }

    function updateSlidePosition() {
        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    function moveToSlide(index) {
        currentIndex = index;
        updateSlidePosition();
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            moveToSlide(currentIndex - 1);
        } else {
            moveToSlide(items.length - itemsPerView);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < items.length - itemsPerView) {
            moveToSlide(currentIndex + 1);
        } else {
            moveToSlide(0);
        }
    });

    // Initialize carousel
    updateItemWidth();
    window.addEventListener('resize', () => {
        updateItemWidth();
        updateSlidePosition();
    });

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    track.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    document.addEventListener('DOMContentLoaded', function() {
        const track = document.querySelector('.carousel-track');
        const items = document.querySelectorAll('.carousel-item');
        const prevButton = document.querySelector('.carousel-button.prev');
        const nextButton = document.querySelector('.carousel-button.next');
        
        let currentIndex = 0;
        let itemWidth;
        let itemsPerView;
    
        function updateItemWidth() {
            const viewportWidth = window.innerWidth;
            if (viewportWidth > 1024) {
                itemsPerView = 3;
            } else if (viewportWidth > 640) {
                itemsPerView = 2;
            } else {
                itemsPerView = 1;
            }
            
            itemWidth = track.clientWidth / itemsPerView;
            items.forEach(item => {
                item.style.minWidth = `${itemWidth}px`;
            });
        }
    
        function updateSlidePosition() {
            track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    
        function moveToSlide(index) {
            currentIndex = index;
            updateSlidePosition();
        }
    
        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                moveToSlide(currentIndex - 1);
            } else {
                moveToSlide(items.length - itemsPerView);
            }
        });
    
        nextButton.addEventListener('click', () => {
            if (currentIndex < items.length - itemsPerView) {
                moveToSlide(currentIndex + 1);
            } else {
                moveToSlide(0);
            }
        });
    
        // Initialize carousel
        updateItemWidth();
        window.addEventListener('resize', () => {
            updateItemWidth();
            updateSlidePosition();
        });
    
        // Touch events for mobile
        let touchStartX = 0;
        let touchEndX = 0;
    
        track.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        });
    
        track.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
    
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
    
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0 && currentIndex < items.length - itemsPerView) {
                    // Swipe left
                    moveToSlide(currentIndex + 1);
                } else if (diff < 0 && currentIndex > 0) {
                    // Swipe right
                    moveToSlide(currentIndex - 1);
                }
            }
        }
    });
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentIndex < items.length - itemsPerView) {
                // Swipe left
                moveToSlide(currentIndex + 1);
            } else if (diff < 0 && currentIndex > 0) {
                // Swipe right
                moveToSlide(currentIndex - 1);
            }
        }
    }
});