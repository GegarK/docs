# 图片动作

* [https://colab.research.google.com/github/camenduru/MagicAnimate-colab/blob/main/MagicAnimate_colab.ipynb](https://colab.research.google.com/github/camenduru/MagicAnimate-colab/blob/main/MagicAnimate_colab.ipynb)

```py
%cd /content
!git clone -b dev https://github.com/camenduru/MagicAnimate-hf

!pip install -q diffusers==0.21.4 transformers==4.32.0 accelerate==0.22.0 omegaconf==2.3.0 einops==0.6.1 av gradio
!pip install -q https://download.pytorch.org/whl/cu118/xformers-0.0.22.post4%2Bcu118-cp310-cp310-manylinux2014_x86_64.whl

!apt -y install -qq aria2
BaseModelUrl = "https://huggingface.co/runwayml/stable-diffusion-v1-5"
BaseModelDir = "/content/MagicAnimate-hf/stable-diffusion-v1-5"
!aria2c --console-log-level=error -c -x 16 -s 16 -k 1M {BaseModelUrl}/raw/main/model_index.json -d {BaseModelDir} -o model_index.json
!aria2c --console-log-level=error -c -x 16 -s 16 -k 1M {BaseModelUrl}/resolve/main/vae/diffusion_pytorch_model.bin -d {BaseModelDir}/vae -o diffusion_pytorch_model.bin
!aria2c --console-log-level=error -c -x 16 -s 16 -k 1M {BaseModelUrl}/raw/main/vae/config.json -d {BaseModelDir}/vae -o config.json
!aria2c --console-log-level=error -c -x 16 -s 16 -k 1M {BaseModelUrl}/resolve/main/unet/diffusion_pytorch_model.bin -d {BaseModelDir}/unet -o diffusion_pytorch_model.bin
!aria2c --console-log-level=error -c -x 16 -s 16 -k 1M {BaseModelUrl}/raw/main/unet/config.json -d {BaseModelDir}/unet -o config.json
!aria2c --console-log-level=error -c -x 16 -s 16 -k 1M {BaseModelUrl}/raw/main/tokenizer/vocab.json -d {BaseModelDir}/tokenizer -o vocab.json
!aria2c --console-log-level=error -c -x 16 -s 16 -k 1M {BaseModelUrl}/raw/main/tokenizer/tokenizer_config.json -d {BaseModelDir}/tokenizer -o tokenizer_config.json
!aria2c --console-log-level=error -c -x 16 -s 16 -k 1M {BaseModelUrl}/raw/main/tokenizer/special_tokens_map.json -d {BaseModelDir}/tokenizer -o special_tokens_map.json
!aria2c --console-log-level=error -c -x 16 -s 16 -k 1M {BaseModelUrl}/raw/main/tokenizer/merges.txt -d {BaseModelDir}/tokenizer -o merges.txt
!aria2c --console-log-level=error -c -x 16 -s 16 -k 1M {BaseModelUrl}/resolve/main/text_encoder/pytorch_model.bin -d {BaseModelDir}/text_encoder -o pytorch_model.bin
!aria2c --console-log-level=error -c -x 16 -s 16 -k 1M {BaseModelUrl}/raw/main/text_encoder/config.json -d {BaseModelDir}/text_encoder -o config.json
!aria2c --console-log-level=error -c -x 16 -s 16 -k 1M {BaseModelUrl}/raw/main/scheduler/scheduler_config.json -d {BaseModelDir}/scheduler -o scheduler_config.json
!aria2c --console-log-level=error -c -x 16 -s 16 -k 1M {BaseModelUrl}/resolve/main/safety_checker/pytorch_model.bin -d {BaseModelDir}/safety_checker -o pytorch_model.bin
!aria2c --console-log-level=error -c -x 16 -s 16 -k 1M {BaseModelUrl}/raw/main/safety_checker/config.json -d {BaseModelDir}/safety_checker -o config.json
!aria2c --console-log-level=error -c -x 16 -s 16 -k 1M {BaseModelUrl}/raw/main/feature_extractor/preprocessor_config.json -d {BaseModelDir}/feature_extractor -o preprocessor_config.json

%cd /content/MagicAnimate-hf
!python app.py

// https://f04b4fcbbbce6b469c.gradio.live/
```

<DocsAD/>