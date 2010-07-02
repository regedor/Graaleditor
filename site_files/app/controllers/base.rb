Gralleditor.controllers  :base do

  get :index, :map => "/" do
    redirect "/about"
  end

  get :index, :map => "/about" do
    render "base/index"
  end
end
