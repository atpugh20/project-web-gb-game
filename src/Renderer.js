class Renderer {
    constructor(screen_width, screen_height, canvas_context, screen_multiplier) {
        this.screen_width       = screen_width;
        this.screen_height      = screen_height;
        this.screen_multiplier  = screen_multiplier;

        this.ctx              = canvas_context;
        this.background_color = "black";
        this.current_tile_map = new Image();

        this.tile_size   = 8;
        this.tile_d_size = this.tile_size * screen_multiplier;

        this.len_x = screen_width / this.tile_d_size;
        this.len_y = screen_height / this.tile_d_size;
    }

    ClearScreen() {
        this.ctx.clearRect(0,0, this.screen_width, this.screen_height);
        this.ctx.fillStyle = this.background_color;
        this.ctx.fillRect(0,0, this.screen_width, this.screen_height);
    }

    Draw() {
        this.ctx.imageSmoothingEnabled = false;
        this.DrawMap(test_room_layer_1);
    }

    LoadTileMap(path) {
        this.current_tile_map.src = path;
    }

    DrawMap(map_data) {
        for (let y = 0; y < this.len_y; y++) {
            for (let x = 0; x < this.len_x; x++) {
                const tile_i = map_data[y][x];
                const tilemap_x = this.current_tile_map.width / this.tile_size;
                const tilemap_y = this.current_tile_map.height / this.tile_size;

                // Tile map coordinates
                const sx = tile_i % tilemap_x * this.tile_size;
                const sy = Math.floor(tile_i / tilemap_y) * this.tile_size;

                // Canvas coordinates
                const dx = x * this.tile_d_size;
                const dy = y * this.tile_d_size;

                this.ctx.drawImage(
                    this.current_tile_map,
                    sx, sy, this.tile_size, this.tile_size,
                    dx, dy, this.tile_d_size, this.tile_d_size
                )
            }
        }  
    }
}