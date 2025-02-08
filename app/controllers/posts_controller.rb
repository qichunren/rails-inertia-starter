class PostsController < ApplicationController
  before_action :set_post, only: %i[ show edit update destroy ]

  # GET /posts or /posts.json
  def index
    @posts = Post.all
    render inertia: 'Posts/Index', props: {
      posts: @posts
    }
  end

  # GET /posts/1 or /posts/1.json
  def show
    render inertia: 'Posts/Show', props: {
      post: @post
    }
  end

  # GET /posts/new
  def new
    @post = Post.new(title: 'Default Title', content: 'Default Content')
    render inertia: 'Posts/New', props: {
      post: @post
    }
  end

  # GET /posts/1/edit
  def edit
    render inertia: 'Posts/Edit', props: {
      post: @post
    }
  end

  # POST /posts or /posts.json
  def create
    @post = Post.new(post_params)

    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: "Post was successfully created." }
      else
        format.html { redirect_to new_post_url, inertia: { errors: @post.errors } }
      end
    end
  end

  # PATCH/PUT /posts/1 or /posts/1.json
  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to @post, notice: "Post was successfully updated." }
      else
        format.html { redirect_to edit_post_url(@post), inertia: { errors: @post.errors } }
      end
    end
  end

  # DELETE /posts/1 or /posts/1.json
  def destroy
    @post.destroy!

    respond_to do |format|
      format.html { redirect_to posts_path, status: :see_other, notice: "Post was successfully destroyed." }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.expect(post: [ :title, :content ])
    end
end
