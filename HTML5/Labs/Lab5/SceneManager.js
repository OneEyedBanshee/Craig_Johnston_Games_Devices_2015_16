function SceneManager()
{		
	this.currentScene;
	this.sceneList = [];	
}

SceneManager.prototype.addScene = function(scene)
{
	this.sceneList.push(scene);	

	if (this.currentScene == null)
		this.currentScene = scene;
}

SceneManager.prototype.goToScene = function(sceneTitle)
{
	var length = this.sceneList.length;
	var i = 0;

	while (this.currentScene.m_title != sceneTitle && i < length){

		if (this.sceneList[i].m_title == sceneTitle){

			this.currentScene.stop();

			this.currentScene = this.sceneList[i];

			this.currentScene.start();			
		}
		
		i++;
	}
}

SceneManager.prototype.nextScene = function()
{
	if (this.currentScene.nextScene == null)
		this.goToScene(this.sceneList[0].m_title);
	else
		this.goToScene(this.currentScene.nextScene.m_title)
}