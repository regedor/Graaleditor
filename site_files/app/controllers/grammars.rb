Gralleditor.controllers :grammars do

  get :index do
    @grammars = Grammar.all
    render 'grammars/index'
  end

  get :show, :with => :id do
    @grammar = Grammar.find(params[:id])
    render 'grammars/edit'
  end

  get :new do
    @grammar = Grammar.new
    render 'grammars/new'
  end

  post :create do
    @grammar = Grammar.new(params[:grammar])
    if current_account and @grammar.account=current_account.id and @grammar.save
      flash[:notice] = 'Grammar was successfully created.'
      redirect url(:grammars, :edit, :id => @grammar.id)
    else
      render 'grammars/new'
    end
  end

  get :edit, :with => :id do
    @grammar = Grammar.find(params[:id])
    render 'grammars/edit'
  end

  put :update, :with => :id do
    @grammar = Grammar.find(params[:id])
    if current_account and @grammar.account=current_account and @grammar.update_attributes(params[:grammar])
      flash[:notice] = 'Grammar was successfully updated.'
      redirect url(:grammars, :edit, :id => @grammar.id)
    else
      render 'grammars/edit'
    end
  end

  delete :destroy, :with => :id do
    grammar = Grammar.find(params[:id])
    if current_account and grammar.destroy
      flash[:notice] = 'Grammar was successfully destroyed.'
    else
      flash[:error] = 'Impossible to destroy Grammar!'
    end
    redirect url(:grammars, :index)
  end
end
